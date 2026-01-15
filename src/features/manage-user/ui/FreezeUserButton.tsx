import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Snowflake } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const FreezeUserButton = ({className}: Props) => {
  return (
    <Button className={cn(className)} variant="outline" size="sm">
      <Snowflake />
      <span>Заморозить</span>
    </Button>
  );
};
