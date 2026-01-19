import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeaderRow, CardTitle } from "@/shared/ui/card";
import { PaidFor } from "@/shared/ui/paid-for";
import { Text } from "@/shared/ui/text";
import { MessageSquareText } from "lucide-react";

export const OrderMainInfo = () => {
  return (
    <Card>
      <CardContent>
        <CardHeaderRow>
          <div className="flex flex-col gap-1">
            <CardTitle>PM-240125-00182</CardTitle>
            <Text size="default" color="foreground" weight="semibold">Свадьба Ивана и Марии</Text>
            <div className="flex items-center gap-4 flex-wrap">
                <Text  size="sm" color="foreground">
              Создан: 20.12.2025
            </Text>
            <Text size="sm" color="foreground">Дата проведения: 21.12.2025</Text>
            <Text size="sm" color="foreground">Тип: Свадьба</Text>
            <Text className="inline" size="sm" color="foreground">Клиент: Иван К. <Text className="inline" size="sm" color="mutedForeground">+7 *** *** **-12</Text></Text>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <PaidFor totalPrice={265000} paid={70000} />

            <Button variant="outline" size="sm">
              <MessageSquareText />
              <span>Диалоги</span>
            </Button>
          </div>
        </CardHeaderRow>
      </CardContent>
    </Card>
  );
};
