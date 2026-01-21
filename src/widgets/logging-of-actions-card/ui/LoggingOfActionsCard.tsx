import { LogsFilters } from "@/features/logs-filters";
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
import { KeyRound } from "lucide-react";

export const LoggingOfActionsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderRow>
          <CardTitle>Логирование действий</CardTitle>
          <LogsFilters />
        </CardHeaderRow>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Дата</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>Событие</TableHead>
              <TableHead>Контекст</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>14.01.2026 09:11</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>123213232</span>
                  <Badge variant="outline">Admin</Badge>
                </div>
              </TableCell>
              <TableCell>Вход в систему</TableCell>
              <TableCell>IP 185.xxx.xxx.xxx</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>14.01.2026 09:11</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>123213232</span>
                  <Badge variant="outline">Admin</Badge>
                </div>
              </TableCell>
              <TableCell>Вход в систему</TableCell>
              <TableCell>IP 185.xxx.xxx.xxx</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>14.01.2026 09:11</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>123213232</span>
                  <Badge variant="outline">Admin</Badge>
                </div>
              </TableCell>
              <TableCell>Вход в систему</TableCell>
              <TableCell>IP 185.xxx.xxx.xxx</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
