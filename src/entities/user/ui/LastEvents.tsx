import { EventCard } from "@/entities/event";
import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const LastEvents = ({className}: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-0">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <CardTitle>Последние события</CardTitle>
          <Badge variant="outline">10</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <EventCard
            eventType="create"
            description="Ведущий на свадьбу"
            date={new Date()}
          />
          <EventCard
            eventType="response"
            description="На заказ #ORD-2219"
            date={new Date()}
          />
          <EventCard
            eventType="deposit"
            description="+5 000 Р"
            date={new Date()}
          />
        </div>
      </CardContent>
    </Card>
  );
};
