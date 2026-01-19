import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderRow,
  CardTitle,
} from "@/shared/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

export const OrderPaymentsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderRow>
          <CardTitle>Все платежи в рамках заказа</CardTitle>
        </CardHeaderRow>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Номер оплаты</TableHead>
              <TableHead>Номер услуги</TableHead>
              <TableHead>Тип платежа</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Способ оплаты</TableHead>
              <TableHead>Чек</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {new Array(3).fill(1).map((_, index) => (
              <TableRow key={index}>
                <TableCell>RDS-12322</TableCell>
                <TableCell>RDF-123232</TableCell>
                <TableCell>Бронь</TableCell>
                <TableCell>30 000 Р</TableCell>
                <TableCell>
                  <Badge variant="outline">Оплачен</Badge>
                </TableCell>
                <TableCell>Карта</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Чек
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
