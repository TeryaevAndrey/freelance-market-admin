import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { IconBox } from "@/shared/ui/icon-box";
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
import { CircleCheck, CircleX, Edit, Scale3D, User } from "lucide-react";

export const ModerationTable = () => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Тип сущности</TableHead>
              <TableHead>Название / пользователь</TableHead>
              <TableHead>Статус модерации</TableHead>
              <TableHead>Время в очереди</TableHead>
              <TableHead>Кто отправил</TableHead>
              <TableHead>Дата отправки</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {new Array(10).fill(1).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <IconBox size="md">
                      <User />
                    </IconBox>
                    <div className="flex flex-col">
                      <Text size="md" color="foreground">
                        Профиль
                      </Text>
                      <Text size="xs" color="mutedForeground">
                        MOD-21941
                      </Text>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Text size="md" color="foreground">
                    Иван петров
                  </Text>
                  <Text size="xs" color="mutedForeground">
                    Исполнитель - Ведущий
                  </Text>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">На модерации</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="destructive">2ч 6мин - до 3ч</Badge>
                </TableCell>
                <TableCell>Исполнитель</TableCell>
                <TableCell>
                  <Text size="md" color="foreground">
                    24.12.2025 <br /> 15:12
                  </Text>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-end">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="success" size="icon-sm">
                          <CircleCheck />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Одобрить</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="destructive" size="icon-sm">
                          <CircleX />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Отклонить</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="warning" size="icon-sm">
                          <Edit />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>На правку</TooltipContent>
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
        <PagePagination totalCount={0} pageSize={50} />
      </CardFooter>
    </Card>
  );
};
