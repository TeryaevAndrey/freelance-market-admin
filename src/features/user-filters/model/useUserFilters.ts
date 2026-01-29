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

  const { watch, reset } = form;
  const watchAll = watch();
  const [debouncedFilter] = useDebounce(watchAll, 500);

  useEffect(() => {
    // Обновляем поля формы, если URL изменился (например, при нажатии "Назад")
    reset(searchParameters);
  }, [searchParameters, reset]);

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(debouncedFilter).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value as string);
      }
    });

    params.set("page", "1");

    setSearchParams(params, { replace: true });
  }, [debouncedFilter, setSearchParams]);

  return form;
};
