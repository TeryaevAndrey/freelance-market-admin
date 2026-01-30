import { useForm } from "react-hook-form";
import type { UserFiltersState } from "./types";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useUserFiltersSearchParams } from "./useUserFiltersSearchParams";

export const useUserFilters = () => {
  const [searchParameters, setSearchParams] = useUserFiltersSearchParams();

  const form = useForm<UserFiltersState>({
    defaultValues: searchParameters,
  });

  const { watch, reset, getValues } = form;
  const watchAll = watch();
  const [debouncedFilter] = useDebounce(watchAll, 500);

  // 1. СИНХРОНИЗАЦИЯ: URL -> ФОРМА
  useEffect(() => {
    const currentFormValues = getValues();
    const isDifferent = JSON.stringify(searchParameters) !== JSON.stringify(currentFormValues);

    if (isDifferent) {
      reset(searchParameters);
    }
  }, [searchParameters, reset, getValues]);

  // 2. СИНХРОНИЗАЦИЯ: ФОРМА -> URL
  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(debouncedFilter).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value as string);
      }
    });

    // Важно: проверяем, не пытаемся ли мы установить те же параметры, что уже есть в URL
    // чтобы не провоцировать лишние ререндеры
    const currentParamsString = new URLSearchParams(window.location.search).toString();
    
    // Всегда сбрасываем страницу на 1 при изменении фильтров
    params.set("page", "1");

    if (params.toString() !== currentParamsString) {
      setSearchParams(params, { replace: true });
    }
  }, [debouncedFilter, setSearchParams]);

  return form;
};