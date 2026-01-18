import { Note } from "@/entities/note";
import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderRow,
  CardTitle,
} from "@/shared/ui/card";
import { TriangleAlert } from "lucide-react";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const NoteFeedCard = ({ className }: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-0">
        <CardHeaderRow>
          <CardTitle>Лента заметок</CardTitle>
          <Badge variant="outline">2</Badge>
        </CardHeaderRow>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Note
            icon={<TriangleAlert size={16} />}
            name="Часто отменяют заказы"
            description="Проверять вручную перед снятием ограничений. При повторе - ограничить отклики"
            role="Админ"
            date={new Date()}
          />
          <Note
            icon={<TriangleAlert size={16} />}
            name="Часто отменяют заказы"
            description="Проверять вручную перед снятием ограничений. При повторе - ограничить отклики"
            role="Админ"
            date={new Date()}
          />
        </div>
      </CardContent>
    </Card>
  );
};
