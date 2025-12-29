import { useForm } from "react-hook-form";
import type { UserFiltersState } from "./types";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";

export const useUserFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useForm<UserFiltersState>({
    defaultValues: {
      query: searchParams.get("query") || "",
      role: searchParams.get("role") || "all",
      status: searchParams.get("status") || "all",
      city: searchParams.get("city") || "all",
      dateFrom: searchParams.get("dateFrom") || "",
      dateTo: searchParams.get("dateTo") || "",
    },
  });

  const watchAll = form.watch();
  const [debouncedFilter] = useDebounce(watchAll, 500);

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
