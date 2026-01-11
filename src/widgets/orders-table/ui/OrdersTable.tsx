import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import { OrdersTableRow } from "./OrdersTableRow";

export const OrdersTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Заказы</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Номер</TableHead>
              <TableHead>Создан</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Тип события</TableHead>
              <TableHead>Название</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Стоимость</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Оплата</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
                new Array(10).fill(1).map((_, index) => (
                    <OrdersTableRow key={index} />
                ))
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
