import type { HTMLAttributes, JSX } from "react";
import { Card, CardContent } from "../../card";
import { cn } from "@/lib/utils";
import { Label } from "../../label";
import { Text } from "../../text";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  value?: string | JSX.Element;
}

export const ParameterCard = ({ className, name, value }: Props) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="flex flex-col gap-1">
          <Label>{name}</Label>
          {typeof value === "string" ? (
            <Text size="sm" color="foreground">
              {value}
            </Text>
          ) : (
            value
          )}
        </div>
      </CardContent>
    </Card>
  );
};
