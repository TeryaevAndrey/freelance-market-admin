import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import { Check, Clock, KeyRound, Luggage, TriangleAlert, User } from "lucide-react";
import { CopyUserIdButton } from "../CopyUserIdButton";
import { InfoCard } from "@/shared/ui/info-card";
import { BlockUserButton, FreezeUserButton, HideFromCatalogButton, ResetSessionsButton, ShowInCatalogButton } from "@/features/manage-user";

export const UserCard = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <User />
              <Text size="default" color="foreground">
                Иван Петров
              </Text>
            </div>
            <Text size="default" color="mutedForeground">
              ID:USR-102394
            </Text>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline">
              <Check />
              Статус: Активен
            </Badge>
            <Badge variant="outline">
              <TriangleAlert />
              Верификация: На проверке
            </Badge>
            <CopyUserIdButton />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard
            icon={<Luggage size={16} />}
            title="Роли"
            valueText="Клиент - Исполнитель"
            description="служебная"
          />
          <InfoCard icon={<Clock size={16} />} title="Регистрация" valueText="12.08.2025, 14:32" description="дата/время" />
          <InfoCard icon={<KeyRound size={16} />} title="Последний вход" valueText="14.01.2026, 09:11" description="IP: 185.xxx.xxx.xxx" />
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
            <BlockUserButton />
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
