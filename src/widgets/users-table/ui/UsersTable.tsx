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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Text } from "@/shared/ui/text";
import { Ban, LogOut, MessageSquareMore, Trash, UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UsersTable = () => {
  const navigate = useNavigate();

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
            {new Array(10).fill(1).map((_, index) => (
              <TableRow
                className="cursor-pointer"
                key={index}
                onClick={() => navigate("/dashboard/users/2")}
              >
                <TableCell>#10421</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/" alt="/" />
                      <AvatarFallback>TT</AvatarFallback>
                    </Avatar>

                    <Text size="default">Иван петров</Text>
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
                    <Button variant="secondary" size="icon-sm">
                      <UserCog />
                    </Button>
                    <Button variant="secondary" size="icon-sm">
                      <MessageSquareMore />
                    </Button>
                    <Button variant="destructive" size="icon-sm">
                      <Ban />
                    </Button>
                    <Button variant="secondary" size="icon-sm">
                      <LogOut />
                    </Button>
                    <Button variant="destructive" size="icon-sm">
                      <Trash />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <PagePagination />
      </CardFooter>
    </Card>
  );
};
