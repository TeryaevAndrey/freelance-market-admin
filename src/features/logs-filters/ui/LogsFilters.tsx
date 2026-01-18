import { Button } from "@/shared/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import { Filter, Search } from "lucide-react";

export const LogsFilters = () => {
  return (
    <div className="flex items-center gap-3 max-md:flex-wrap">
      <InputGroup>
        <InputGroupInput placeholder="Поиск (событие, заказ, IP)..." />
        <InputGroupAddon align="inline-end">
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <Button className="h-9" variant="outline" size="sm">
        <Filter />
        <span>Тип/период</span>
      </Button>
    </div>
  );
};
