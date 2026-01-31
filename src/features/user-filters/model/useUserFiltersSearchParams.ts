import { useSearchParams } from "react-router-dom";

export const useUserFiltersSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parameters = {
    query: searchParams.get("query") || "",
    role: searchParams.get("role") || "all",
    status: searchParams.get("status") || "all",
    city: searchParams.get("city") || "all",
    dateFrom: searchParams.get("dateFrom") || "",
    dateTo: searchParams.get("dateTo") || "",
  };

  return [parameters, setSearchParams] as const
 };
