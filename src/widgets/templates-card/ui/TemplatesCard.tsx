import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderRow,
  CardTitle,
} from "@/shared/ui/card";
import { File } from "lucide-react";

export const TemplatesCard = () => {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardHeaderRow>
          <CardTitle>Шаблоны</CardTitle>
          <Badge variant="outline">быстро</Badge>
        </CardHeaderRow>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Button variant="outline" size="sm">
            <File />
            <span>Проверить документы</span>
          </Button>
          <Button variant="outline" size="sm">
            <File />
            <span>Ограничить сообщения</span>
          </Button>
          <Button variant="outline" size="sm">
            <File />
            <span>Подозрение на фрод</span>
          </Button>
          <Button variant="outline" size="sm">
            <File />
            <span>Ручная модерация контента</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
