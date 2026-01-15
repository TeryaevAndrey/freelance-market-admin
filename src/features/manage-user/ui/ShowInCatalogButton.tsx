import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Eye } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ShowInCatalogButton = ({ className }: Props) => {
  return (
    <Button className={cn(className)} variant="outline" size="sm">
      <Eye />
      <span>Показать в каталоге</span>
    </Button>
  );
};
