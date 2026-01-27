import { cn } from "@/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { ExternalLink } from "lucide-react";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const UserAdditionalDataCard = ({ className }: Props) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Дополнительная информация</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <Label>Категории</Label>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline">Площадки и локации</Badge>
            <Badge variant="outline">Развлекательная программа</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ExternalLink />
              Профиль
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ExternalLink />
              Услуги
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ExternalLink />
              Пространства
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
