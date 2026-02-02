import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { PagePagination } from "@/shared/ui/page-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Text } from "@/shared/ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import { TicketCardModal } from "@/widgets/ticket-card-modal";
import { ArrowDownUp, Scale3D, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const TicketsTable = () => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID тикета</TableHead>
              <TableHead>Тема обращения</TableHead>
              <TableHead>Пользователь</TableHead>
              <TableHead>Ответственный</TableHead>
              <TableHead>Время без ответа</TableHead>
              <TableHead>Дата создания</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {new Array(10).fill(1).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Text size="md" color="foreground">
                    TCK-80360
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size="md" color="foreground">
                    Как добавить оффлайн-заказ в календарь?
                  </Text>
                  <Text size="xs" color="mutedForeground">
                    Категория: Функциональная
                  </Text>
                </TableCell>
                <TableCell>
                  <Button variant="link" asChild>
                    <Link to="/dashboard/users/1">@performer_lite</Link>
                  </Button>
                </TableCell>
                <TableCell>
                  <Text size="md" color="foreground">
                    Саппорт #3
                  </Text>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">36 мин</Badge>
                </TableCell>
                <TableCell>
                  <Text size="md" color="foreground">
                    23.12.2025 <br /> 12:02
                  </Text>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-end">
                    <TicketCardModal />

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="accent" size="icon-sm">
                          <Users />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Назначить</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="warning" size="icon-sm">
                          <ArrowDownUp />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Статус</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="default" size="icon-sm">
                          <Scale3D />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Передать</TooltipContent>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <PagePagination totalCount={0} pageSize={10} />
      </CardFooter>
    </Card>
  );
};
