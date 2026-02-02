import { categoryQueries } from "@/entities/category";
import { cn } from "@/lib/utils";
import { useUserContext } from "@/pages/dashboard/user";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { useMemo, type HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const UserAdditionalDataCard = ({ className }: Props) => {
  const { user } = useUserContext();
  const { data: categories } = useQuery(
    categoryQueries.list({ page: 1, page_size: 50 }),
  );

  const foundCategories = useMemo(() => {
    if (!categories?.results || !user?.categories) return [];

    return categories.results.filter((category) =>
      user.categories.includes(category.id),
    );
  }, [categories?.results, user?.categories]);
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Дополнительная информация</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <Label>Категории</Label>
          <div className="flex items-center gap-2 flex-wrap">
            {foundCategories.length > 0
              ? foundCategories.map((c) => (
                  <Badge key={c.id} variant="outline">
                    {c.name}
                  </Badge>
                ))
              : "-"}
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
