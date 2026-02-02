import { useUserContext } from "@/pages/dashboard/user";
import { ActionCard } from "@/shared/ui/action-card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import { KeyRound } from "lucide-react";

export const RolesAndAccessCard = () => {
  const { user } = useUserContext();

  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <CardTitle>Роли и права</CardTitle>
          <Badge variant="outline">
            <KeyRound size={16} />
            служебно
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Card>
            <CardContent className="gap-3 flex flex-col">
              <Text tag="h5" size="xs" color="mutedForeground">
                Роли
              </Text>
              {user.role && (
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="outline">{user.role}</Badge>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="gap-3 flex flex-col">
              <Text tag="h5" size="xs" color="mutedForeground">
                Ограничения
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ActionCard
                  name="Запрет сообщений"
                  actionComponent={
                    <Button variant="outline" size="xs">
                      Переключить
                    </Button>
                  }
                />
                <ActionCard
                  name="Запрет откликов"
                  actionComponent={
                    <Button variant="outline" size="xs">
                      Переключить
                    </Button>
                  }
                />
                <ActionCard
                  name="Запрет создания заказов"
                  actionComponent={
                    <Button variant="outline" size="xs">
                      Переключить
                    </Button>
                  }
                />
                <ActionCard
                  name="Скрыт из каталога"
                  actionComponent={
                    <Button variant="outline" size="xs">
                      Переключить
                    </Button>
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
