import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import type { OrderFiltersState } from "./types";

export const useOrderFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useForm<OrderFiltersState>({
    defaultValues: {
      query: searchParams.get("query") || "",
      status: searchParams.get("status") || "all",
      city: searchParams.get("city") || "all",
      eventType: searchParams.get("eventType") || "all", 
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
