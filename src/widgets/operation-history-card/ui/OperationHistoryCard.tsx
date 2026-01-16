import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
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

export const OperationHistoryCard = ({className}: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-0">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <CardTitle>История операций</CardTitle>
          <Badge variant="outline">последние</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Дата</TableHead>
              <TableHead>Тип</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Комментарий</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>12.01.2026</TableCell>
              <TableCell>Пополнение</TableCell>
              <TableCell>+5 000 Р</TableCell>
              <TableCell>
                <Badge variant="outline">Успешно</Badge>
              </TableCell>
              <TableCell>Карта</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12.01.2026</TableCell>
              <TableCell>Пополнение</TableCell>
              <TableCell>+5 000 Р</TableCell>
              <TableCell>
                <Badge variant="outline">Успешно</Badge>
              </TableCell>
              <TableCell>Карта</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12.01.2026</TableCell>
              <TableCell>Пополнение</TableCell>
              <TableCell>+5 000 Р</TableCell>
              <TableCell>
                <Badge variant="outline">Успешно</Badge>
              </TableCell>
              <TableCell>Карта</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
