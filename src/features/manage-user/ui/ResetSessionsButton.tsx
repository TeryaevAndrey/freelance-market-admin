import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { RefreshCcw } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ResetSessionsButton = ({className}: Props) => {
  return (
    <Button className={cn(className)} variant="outline" size="sm">
      <RefreshCcw />
      <span>Сбросить сессии</span>
    </Button>
  );
};
