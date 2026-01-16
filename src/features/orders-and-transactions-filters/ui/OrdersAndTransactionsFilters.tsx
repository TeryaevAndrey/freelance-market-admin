import { Button } from "@/shared/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import { Funnel, Search } from "lucide-react";

export const OrdersAndTransactionsFilters = () => {
  return (
    <div className="flex items-center gap-2 max-md:flex-wrap">
      <InputGroup>
        <InputGroupInput placeholder="Поиск по заказам" />
        <InputGroupAddon align="inline-end">
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <Button className="h-9" variant="outline" size="sm">
        <Funnel />
        <span>Фильтры</span>
      </Button>
    </div>
  );
};
