import type { HTMLAttributes, JSX } from "react";
import { Card, CardContent } from "../../card";
import { cn } from "@/lib/utils";
import { Text } from "../../text";

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon?: JSX.Element;
  title: string;
  valueText?: string;
  description?: string;
}

export const InfoCard = ({
  className,
  icon,
  title,
  valueText = "-",
  description,
}: Props) => {
  return (
    <Card className={cn(className)}>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          {icon}
          <Text size="xs" color="foreground">
            {title}
          </Text>
        </div>

        <div className="flex justify-between items-center gap-2 flex-wrap">
          <Text size="xl" color="foreground">
            {valueText}
          </Text>
          {description && (
            <Text className="w-full" size="xs" color="mutedForeground">
              {description}
            </Text>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
