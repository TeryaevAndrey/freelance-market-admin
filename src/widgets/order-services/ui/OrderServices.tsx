import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { PaidFor } from "@/shared/ui/paid-for";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Text } from "@/shared/ui/text";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const OrderServices = ({ className }: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Услуги внутри заказа</CardTitle>
        <CardDescription>
          Иерархия: Родительский заказ - Подзаказы (услуги - доп.услуги)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Номер услуги</TableHead>
              <TableHead>Название услуги</TableHead>
              <TableHead>Доп.услуги</TableHead>
              <TableHead>Стоимость</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Оплачено</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {new Array(5).fill(1).map((_, index) => (
              <TableRow key={index}>
                <TableCell>S-91821</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <Text size="xs" color="foreground">
                      Ведущий Premium (6 часов)
                    </Text>
                    <Text size="xs" color="foreground">
                      45 000 Р к оплате
                    </Text>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">DJ-сет</Badge>
                    <Badge variant="outline">Сценарий под ключ</Badge>
                  </div>
                </TableCell>
                <TableCell>95 000 Р</TableCell>
                <TableCell>
                  <Badge variant="outline">В работе</Badge>
                </TableCell>
                <TableCell>
                  <PaidFor paid={70000} totalPrice={265000} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mt-4 lg:mt-6">
          <Text className="opacity-50" size="xs">
            Подсказка: родительский заказ может быть частично оплачен, даже если
            отдельные услуги уже закрыты.
          </Text>
          <Button className="max-md:w-full" variant="outline" size="sm" asChild>
            <Link to="/dashboard/orders/1">Открыть карточку заказа</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
