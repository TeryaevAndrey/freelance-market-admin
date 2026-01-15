import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";
import { Archive, File, Wallet } from "lucide-react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  eventType?: "create" | "response" | "deposit";
  description?: string;
  date?: Date;
}

export const EventCard = ({
  className,
  eventType,
  description,
  date,
}: Props) => {
  const now = new Date();

  const getIcon = () => {
    if (eventType === "create") {
      return <File size={16} />;
    }

    if (eventType === "response") {
      return <Archive size={16} />;
    }

    if (eventType === "deposit") {
      return <Wallet size={16} />;
    }
  };

  const getName = () => {
    if (eventType === "create") {
      return "Создал услугу";
    }

    if (eventType === "response") {
      return "Откликнулся";
    }

    if (eventType === "deposit") {
      return "Пополнил баланс";
    }
  };

  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-start gap-2">
            {getIcon()}
            <div className="flex flex-col">
              <Text tag="h4" size="sm" color="foreground">
                {getName()}
              </Text>
              {description && (
                <Text size="xs" color="mutedForeground">
                  {description}
                </Text>
              )}
            </div>
          </div>

          {date && (
            <Text size="xs" color="mutedForeground">
              {formatRelative(date, now, { locale: ru })}
            </Text>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
