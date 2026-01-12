import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import type { ModerationFiltersState } from "./types";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";

export const useModerationFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useForm<ModerationFiltersState>({
    defaultValues: {
      query: searchParams.get("query") || "",
      typeEntity: searchParams.get("typeEntity") || "",
      sort: searchParams.get("sort") || "old",
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
