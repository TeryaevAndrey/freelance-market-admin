import { useForm } from "react-hook-form";
import type { UserFiltersState } from "./types";
import { useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import { useUserFiltersSearchParams } from "./useUserFiltersSearchParams";
import { useLocation } from "react-router-dom";

export const useUserFilters = () => {
  const { search } = useLocation();
  const [searchParameters, setSearchParams] = useUserFiltersSearchParams();

  const form = useForm<UserFiltersState>({
    // Используем values вместо defaultValues для автоматической синхронизации при изменении URL
    values: searchParameters,
  });

  const {
    watch,
    reset,
    getValues,
    formState: { isDirty },
  } = form;
  const watchAll = watch();
  const [debouncedFilter] = useDebounce(watchAll, 500);

  const lastFiltersRef = useRef(JSON.stringify(searchParameters));

  // 1. СИНХРОНИЗАЦИЯ: URL -> ФОРМА
  // Оставляем проверку на isDirty, чтобы не перетирать ввод пользователя
  useEffect(() => {
    if (isDirty) return;
    const currentFormValues = getValues();
    if (
      JSON.stringify(searchParameters) !== JSON.stringify(currentFormValues)
    ) {
      reset(searchParameters);
      lastFiltersRef.current = JSON.stringify(searchParameters);
    }
  }, [search, reset, getValues, isDirty, searchParameters]);

  // 2. СИНХРОНИЗАЦИЯ: ФОРМА -> URL
  useEffect(() => {
    // УДАЛЯЕМ if (!isDirty) return;
    // Вместо этого проверяем, изменились ли значения формы по сравнению с URL

    const params = new URLSearchParams();
    const currentFiltersOnly = { ...debouncedFilter };

    // Убираем 'page' из сравнения фильтров
    const { page, ...filtersData } = currentFiltersOnly as any;

    Object.entries(filtersData).forEach(([key, value]) => {
      // Ключевое условие: если значение есть и оно НЕ равно "all" и НЕ пустая строка
      if (
        value !== undefined &&
        value !== null &&
        value !== "" &&
        value !== "all"
      ) {
        const formattedValue =
          value instanceof Date ? value.toISOString() : String(value);
        params.set(key, formattedValue);
      }
    });

    // Логика сброса страницы
    const filtersString = JSON.stringify(filtersData);
    if (filtersString !== lastFiltersRef.current) {
      params.set("page", "1");
      lastFiltersRef.current = filtersString;
    } else {
      const currentPageFromUrl = new URLSearchParams(search).get("page") || "1";
      params.set("page", currentPageFromUrl);
    }

    const nextSearch = params.toString();
    const currentSearch = new URLSearchParams(search).toString();

    // Главный предохранитель от бесконечного цикла
    if (nextSearch !== currentSearch) {
      setSearchParams(params, { replace: true });
    }
  }, [debouncedFilter, setSearchParams, search]); // Убрали isDirty из зависимостей

  return form;
};
