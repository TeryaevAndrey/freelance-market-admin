import { getCityById, getCityId } from "@/entities/region";
import { getFullName, getUserStatusName, type User } from "@/entities/user";
import { BlockUserButton } from "@/features/manage-user";
import { AddUserModal } from "@/features/user-add";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/pagination.constants";
import { useRegions } from "@/shared/contexts/RegionsContext";
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
import { PageLimitSelect } from "@/shared/ui/page-limit-select";
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
import { format } from "date-fns";
import { Ban, LogOut, MessageSquareMore, User as UserIcon } from "lucide-react";
import type { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data?: User[];
  isLoading?: boolean;
  totalCount?: number;
  pageSize?: number;
}

export const UsersTable = ({
  data = [],
  isLoading = false,
  totalCount = 0,
  pageSize = DEFAULT_PAGE_SIZE,
}: Props) => {
  const { cities } = useRegions();
  const navigate = useNavigate();
  const isEmpty = !isLoading && data.length === 0;

  const getCitiesNames = (userCities: string[] = []) => {
    const formattedCities = userCities
      .map((userCity) => {
        const userCityId = getCityId(userCity);
        const city = getCityById(Number(userCityId), cities);

        return city?.name;
      })
      .filter((city) => city !== undefined)
      .join(", ");

    return formattedCities;
  };

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
                        <AvatarFallback>
                          <UserIcon size={16} />
                        </AvatarFallback>
                      </Avatar>

                      {getFullName(user.first_name, user.last_name) || "-"}
                    </div>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {user.phone_number ||
                      user.phone_number2 ||
                      (user.email ? (
                        <div className="flex items-center gap-2">
                          {(user.phone_number || user.phone_number2) && (
                            <Badge variant="outline">
                              {[user.phone_number, user.phone_number2]
                                .filter((el) => Boolean(el))
                                .join(", ")}
                            </Badge>
                          )}
                          {user.email && (
                            <Badge variant="outline">{user.email}</Badge>
                          )}
                        </div>
                      ) : (
                        "-"
                      ))}
                  </TableCell>
                  <TableCell>
                    {user.cities.length > 0 ? getCitiesNames(user.cities) : "-"}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">12 500 Р</Badge>
                  </TableCell>
                  <TableCell>
                    {user.status ? (
                      <Badge variant="default">
                        {getUserStatusName(user.status)}
                      </Badge>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>
                    {format(new Date(user.date_created), "dd.MM.yyyy")}
                  </TableCell>
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
                          <BlockUserButton userId={user.id} currentStatus={user.status} buttonSize="icon-sm" />
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
          <PageLimitSelect />
          <PagePagination totalCount={totalCount} pageSize={pageSize} />
        </CardFooter>
      )}
    </Card>
  );
};
