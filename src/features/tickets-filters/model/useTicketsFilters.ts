import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import type { TicketsFiltersState } from "./types";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";

export const useTicketsFilters = () => {
      const [searchParams, setSearchParams] = useSearchParams();
    
      const form = useForm<TicketsFiltersState>({
        defaultValues: {
          query: searchParams.get("query") || "",
          type: searchParams.get("type") || "all", 
          sort: searchParams.get("sort") || "last"
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
}