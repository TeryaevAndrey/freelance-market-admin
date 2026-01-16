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

export const UserTicketsCard = ({className}: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-0">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <CardTitle>Тикеты поддержки</CardTitle>
          <Badge variant="outline">2</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Тикет</TableHead>
              <TableHead>Тема</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Действие</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>#T-112</TableCell>
              <TableCell>Вопрос по выплате</TableCell>
              <TableCell>
                <Badge variant="outline">Открыт</Badge>
              </TableCell>
              <TableCell>13.01.2026</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Открыть
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
