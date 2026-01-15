import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { EyeOff } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const HideFromCatalogButton = ({ className }: Props) => {
  return (
    <Button className={cn(className)} variant="outline" size="sm">
      <EyeOff />
      <span>Скрыть из каталога</span>
    </Button>
  );
};
