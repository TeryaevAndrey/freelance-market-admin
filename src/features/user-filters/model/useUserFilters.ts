import { useForm } from "react-hook-form";
import type { UserFiltersState } from "./types";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useUserFiltersSearchParams } from "./useUserFiltersSearchParams";
import { useLocation } from "react-router-dom";

export const useUserFilters = () => {
  const { search } = useLocation(); // Используем строку поиска напрямую
  const [searchParameters, setSearchParams] = useUserFiltersSearchParams();

  const form = useForm<UserFiltersState>({
    defaultValues: searchParameters,
  });

  const { watch, reset, getValues, formState: { isDirty } } = form;
  const watchAll = watch();
  const [debouncedFilter] = useDebounce(watchAll, 500);

  // 1. СИНХРОНИЗАЦИЯ: URL -> ФОРМА (только при внешнем изменении, например, кнопка "Назад")
  useEffect(() => {
    // Если пользователь сам сейчас что-то меняет в форме, не даем URL перезаписывать его ввод
    if (isDirty) return;

    const currentFormValues = getValues();
    const isDifferent = JSON.stringify(searchParameters) !== JSON.stringify(currentFormValues);

    if (isDifferent) {
      // Используем keepDirtyValues: false, чтобы после сброса форма считалась чистой
      reset(searchParameters, { keepDefaultValues: false });
    }
  }, [search, reset]); // Зависим от строки URL, а не от объекта

  // 2. СИНХРОНИЗАЦИЯ: ФОРМА -> URL
  useEffect(() => {


    const params = new URLSearchParams();

    Object.entries(debouncedFilter).forEach(([key, value]) => {
      if (value && value !== "all") {
        // Если это дата из DatePicker, преобразуем в ISO строку
        const formattedValue = value instanceof Date ? value.toISOString() : (value as string);
        params.set(key, formattedValue);
      }
    });

    params.set("page", "1"); // При изменении фильтров всегда на 1 страницу

    // Сравниваем только с текущим URL, чтобы избежать лишних записей в историю
    const nextSearch = params.toString();
    const currentSearch = new URLSearchParams(window.location.search).toString();

    if (nextSearch !== currentSearch) {
      setSearchParams(params, { replace: true });
    }
  }, [debouncedFilter, setSearchParams, isDirty]);

  return form;
};