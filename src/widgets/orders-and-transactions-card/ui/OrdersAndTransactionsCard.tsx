import { OrdersAndTransactionsFilters } from "@/features/orders-and-transactions-filters";
import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const OrdersAndTransactionsCard = ({ className }: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-0">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <CardTitle>Заказы и сделки</CardTitle>
          <OrdersAndTransactionsFilters />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Заказ</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead className="text-right">Действие</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>#ORD-2219</TableCell>
              <TableCell>Исполнитель</TableCell>
              <TableCell>
                <Badge variant="outline">Завершен</Badge>
              </TableCell>
              <TableCell>30 000 Р</TableCell>
              <TableCell>10.01.2026</TableCell>
              <TableCell>
                <div className="flex justify-end items-center gap-3">
                  <Button variant="outline" size="sm">
                    Открыть
                  </Button>
                </div>
              </TableCell>
            </TableRow>
             <TableRow>
              <TableCell>#ORD-2219</TableCell>
              <TableCell>Исполнитель</TableCell>
              <TableCell>
                <Badge variant="outline">Завершен</Badge>
              </TableCell>
              <TableCell>30 000 Р</TableCell>
              <TableCell>10.01.2026</TableCell>
              <TableCell>
                <div className="flex justify-end items-center gap-3">
                  <Button variant="outline" size="sm">
                    Открыть
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
