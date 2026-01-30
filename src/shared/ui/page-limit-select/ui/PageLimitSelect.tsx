import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/pagination.constants";

interface Props {
  defaultValue?: string;
  options?: string[];
}

export const PageLimitSelect = ({
  defaultValue = String(DEFAULT_PAGE_SIZE),
  options = ["10", "25", "50", "100"],
}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentLimit = searchParams.get("pageSize") || defaultValue;

  const handleLimitChange = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("pageSize", value);
      next.set("page", "1");
      return next;
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        Записей на странице:
      </span>
      <Select value={currentLimit} onValueChange={handleLimitChange}>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder={currentLimit} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
