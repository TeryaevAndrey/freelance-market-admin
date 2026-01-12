import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { PaidFor } from "@/shared/ui/paid-for";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Text } from "@/shared/ui/text";
import { OrderServices } from "@/widgets/order-services";
import { Anchor, ChevronDown, LocationEdit, Wallet } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const OrdersTableRow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon-sm" onClick={toggleOpen}>
              <ChevronDown className={cn({
                'rotate-180': isOpen
              })} />
            </Button>

            <div className="flex flex-col gap-1">
              <Text size="xs" weight="semibold" color="foreground">
                PM-240125-00182
              </Text>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <LocationEdit size={16} />
                  <Text size="xs">Курск</Text>
                </div>

                <div className="flex items-center gap-1">
                  <Wallet size={16} />
                  <Text size="xs">716 000 Р</Text>
                </div>
              </div>
            </div>
          </div>
        </TableCell>
        <TableCell>20.12.2025</TableCell>
        <TableCell>
          <div className="flex flex-col">
            <Text size="xs">Иван К.</Text>
            <Text className="opacity-50" size="xs">
              +7 *** ***-**-12
            </Text>
          </div>
        </TableCell>
        <TableCell>Свадьба</TableCell>
        <TableCell>
          <div className="flex flex-col">
            <Text size="xs">Свадьба Ивана и Марии</Text>
            <Text className="opacity-50" size="xs">
              <Anchor className="inline" size={16} /> 3 услуг
            </Text>
          </div>
        </TableCell>
        <TableCell>14.02.2026</TableCell>
        <TableCell>265 000 Р</TableCell>
        <TableCell>
          <Badge variant="outline">
            <Wallet size={14} />
            Ожидает оплаты
          </Badge>
        </TableCell>
        <TableCell>
          <PaidFor paid={70000} totalPrice={265000} />
        </TableCell>
        <TableCell>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/dashboard/orders/1`}>Открыть</Link>
          </Button>
        </TableCell>
      </TableRow>
      {isOpen && (
        <TableRow>
          <TableCell colSpan={10}>
            <OrderServices />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
