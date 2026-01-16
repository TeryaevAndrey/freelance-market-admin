import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  description?: string;
}

export const Complaint = ({
  className,
  name = "-",
  description = "-",
}: Props) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="flex justify-between gap-3">
          <div>
            <Text size="sm" color="foreground">
              {name}
            </Text>
            <Text size="xs" color="mutedForeground">
              {description}
            </Text>
          </div>
          <Badge variant="outline">Решено</Badge>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <Button variant="outline" size="sm">
            Открыть
          </Button>
          <Button variant="outline" size="sm">
            Назначить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
