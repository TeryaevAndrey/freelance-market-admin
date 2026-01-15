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

export const StatusesHistoryCard = () => {
  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <CardTitle>История изменений статусов</CardTitle>
          <Badge variant="outline">аудит</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Дата</TableHead>
              <TableHead>Событие</TableHead>
              <TableHead>Кто</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>10.01.2026</TableCell>
              <TableCell>Профиль скрыт из каталога</TableCell>
              <TableCell>Админ</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10.01.2026</TableCell>
              <TableCell>Профиль скрыт из каталога</TableCell>
              <TableCell>Админ</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10.01.2026</TableCell>
              <TableCell>Профиль скрыт из каталога</TableCell>
              <TableCell>Админ</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
