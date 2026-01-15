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

export const ServicesCard = () => {
  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <CardTitle>Услуги (служебный список)</CardTitle>
          <Badge variant="outline">2</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Название</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Цена от</TableHead>
              <TableHead>Город</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ведущий</TableCell>
              <TableCell>
                <Badge variant="outline">Активна</Badge>
              </TableCell>
              <TableCell>25 000 Р</TableCell>
              <TableCell>Курск</TableCell>
              <TableCell>
                <div className="flex justify-end items-center gap-2">
                  <Button variant="outline" size="xs">
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
