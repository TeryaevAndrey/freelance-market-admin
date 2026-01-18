import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import { format } from "date-fns";
import type { HTMLAttributes, JSX } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon?: JSX.Element;
  name?: string;
  description?: string;
  role?: string;
  date?: Date;
}

export const Note = ({
  className,
  icon,
  name,
  description,
  role,
  date,
}: Props) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="flex justify-between items-start gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {icon}
              <Text size="sm" color="foreground">
                {name}
              </Text>
            </div>
            <Text size="xs" color="foreground">
              {description}
            </Text>
          </div>

          <Button variant="outline" size="sm">
            Редактировать
          </Button>
        </div>

        <Text className="mt-1" size="xs" color="mutedForeground">
          {role} - {date ? format(date, "dd.mm.yyyy") : "-"}
        </Text>
      </CardContent>
    </Card>
  );
};
