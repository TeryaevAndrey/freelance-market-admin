import type { HTMLAttributes, JSX } from "react";
import { Card, CardContent } from "../../card";
import { Text } from "../../text";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  actionComponent?: JSX.Element;
}

export const ActionCard = ({
  className,
  name = "-",
  actionComponent,
}: Props) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="flex justify-between items-center gap-3">
          <Text size="xs" color="foreground">
            {name}
          </Text>
          {actionComponent && actionComponent}
        </div>
      </CardContent>
    </Card>
  );
};
