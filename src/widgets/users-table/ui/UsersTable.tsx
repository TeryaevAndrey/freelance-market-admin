import { getFullName, type User } from "@/entities/user";
import { AddUserModal } from "@/features/user-add";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { PagePagination } from "@/shared/ui/page-pagination";
import { Skeleton } from "@/shared/ui/skeleton";
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
import { Ban, LogOut, MessageSquareMore } from "lucide-react";
import type { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data?: User[];
  isLoading?: boolean;
}

export const UsersTable = ({ data = [], isLoading = false }: Props) => {
  const navigate = useNavigate();
  const isEmpty = !isLoading && data.length === 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex flex-col gap-2">
            <CardTitle>Пользователи</CardTitle>
            <CardDescription>
              Клик по строке открывает карточку пользователя
            </CardDescription>
          </div>

          <AddUserModal />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Имя</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Контакты (ограничено)</TableHead>
              <TableHead>Город</TableHead>
              <TableHead>Баланс</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Регистрация</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading &&
              [...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={9}>
                    <Skeleton className="h-12 w-full" />
                  </TableCell>
                </TableRow>
              ))}

            {isEmpty && (
              <TableRow>
                <TableCell className="h-64 text-center" colSpan={9}>
                  <Text size="sm" fontStyle="italic">
                    Пользователи не найдены
                  </Text>
                </TableCell>
              </TableRow>
            )}

            {!isLoading &&
              data.map((user) => (
                <TableRow
                  className="cursor-pointer"
                  key={user.id}
                  onClick={() => navigate("/dashboard/users/2")}
                >
                  <TableCell>#{user.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/" alt="/" />
                        <AvatarFallback>TT</AvatarFallback>
                      </Avatar>

                      <Text size="default">
                        {getFullName(user.first_name, user.last_name)}
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell>Клиент</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">+7 (***) ***-12-90</Badge>
                      <Badge variant="outline">mail@mail.ru</Badge>
                    </div>
                  </TableCell>
                  <TableCell>Курск</TableCell>
                  <TableCell>
                    <Badge variant="outline">12 500 Р</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">Активен</Badge>
                  </TableCell>
                  <TableCell>18.11.2025</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="secondary" size="icon-sm">
                            <MessageSquareMore />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Диалоги</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="destructive" size="icon-sm">
                            <Ban />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Заблокировать</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="secondary" size="icon-sm">
                            <LogOut />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent align="end">
                          Выйти из всех сессий
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>

      {!isEmpty && !isLoading && (
        <CardFooter>
          <PagePagination />
        </CardFooter>
      )}
    </Card>
  );
};
