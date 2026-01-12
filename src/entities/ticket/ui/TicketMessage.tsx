import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import { Text } from "@/shared/ui/text";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const ticketMessageVariants = cva("p-2", {
  variants: {
    variant: {
      user: "",
      support: "bg-sky-100",
    },
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ticketMessageVariants> {}

export const TicketMessage = ({ className, variant }: Props) => {
  const roleTitle = variant === "user" ? "Пользователь" : "Саппорт";

  return (
    <Card
      className={cn(ticketMessageVariants({ variant }), "gap-0", className)}
    >
      <CardHeader className="px-1">
        <Text size="xs" color="mutedForeground">
          {roleTitle} - 24.12.2025 16.22
        </Text>
      </CardHeader>

      <CardContent className="px-1">
        <Text size="xs" color="foreground">
          Оплата зависла, статус не меняется. Что делать?
        </Text>
      </CardContent>
    </Card>
  );
};
