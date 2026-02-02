import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import {
  Check,
  Clock,
  KeyRound,
  Luggage,
  TriangleAlert,
  User,
} from "lucide-react";
import { CopyUserIdButton } from "../CopyUserIdButton";
import { InfoCard } from "@/shared/ui/info-card";
import {
  BlockUserButton,
  FreezeUserButton,
  HideFromCatalogButton,
  ResetSessionsButton,
  ShowInCatalogButton,
} from "@/features/manage-user";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useUserContext } from "@/pages/dashboard/user/model/UserContext";
import { getFullName } from "../../model/getFullName";
import { getUserStatusName } from "../../model/getUserStatusName";
import { format } from "date-fns";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const UserCard = ({ className }: Props) => {
  const { user } = useUserContext();

  return (
    <Card className={cn(className)}>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <User />
              {(user.first_name || user.last_name) && (
                <Text size="default" color="foreground">
                  {getFullName(user.first_name, user.last_name)}
                </Text>
              )}
            </div>
            <Text size="default" color="mutedForeground">
              ID:{user.id || "-"}
            </Text>
          </div>

          <div className="flex items-center gap-2">
            {user.status !== null && user.status !== undefined && (
              <Badge variant="outline">
                <Check />
                Статус: {getUserStatusName(user.status)}
              </Badge>
            )}
            <Badge variant="outline">
              <TriangleAlert />
              Верификация: На проверке
            </Badge>
            <CopyUserIdButton userId={user.id} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard
            icon={<Luggage size={16} />}
            title="Роли"
            valueText={user.role || "-"}
            description="служебная"
          />
          <InfoCard
            icon={<Clock size={16} />}
            title="Регистрация"
            valueText={
              user.date_created
                ? format(new Date(user.date_created), "dd.MM.yyyy, HH:mm")
                : "-"
            }
            description="дата/время"
          />
          <InfoCard
            icon={<KeyRound size={16} />}
            title="Последний вход"
            valueText={
              user.last_login
                ? format(new Date(user.last_login), "dd.MM.yyyy, HH:mm")
                : "-"
            }
            description={`IP: ${user.ip_address || "-"}`}
          />
        </div>

        <div className="flex items-center gap-3">
          <Text size="xs">Бейджи риска: </Text>
          <Badge variant="outline">Частые отмены</Badge>
          <Badge variant="outline">Ручная модерация</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center gap-3 w-full">
          <div className="flex items-center gap-3 flex-wrap">
            <BlockUserButton userId={user.id} />
            <FreezeUserButton />
            <ResetSessionsButton />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <HideFromCatalogButton />
            <ShowInCatalogButton />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
