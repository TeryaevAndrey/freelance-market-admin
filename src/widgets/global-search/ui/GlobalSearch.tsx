import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import { Search } from "lucide-react";

export const GlobalSearch = () => {
  return (
    <InputGroup className="w-full lg:w-md">
      <InputGroupInput placeholder="Поиск: заказ, пользователь, ID..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
};
