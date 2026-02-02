import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { useAppStore } from "@/shared/store/app.store";

interface Props {
  options?: string[];
}

export const PageLimitSelect = ({
  options = ["10", "25", "50", "100"],
}: Props) => {
  const [_, setSearchParams] = useSearchParams();
  const {pageSize, setPageSize} = useAppStore();

  const handleLimitChange = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      
      setPageSize(Number(value));
      next.set("page", "1");
      return next;
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        Записей на странице:
      </span>
      <Select value={String(pageSize)} onValueChange={handleLimitChange}>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder={pageSize} />
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
