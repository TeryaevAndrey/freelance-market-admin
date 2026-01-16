import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Wallet } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const DebitMoneyButton = ({ className }: Props) => {
  return (
    <Button className={cn(className)} variant="outline" size="sm">
      <Wallet />
      <span>Списать вручную</span>
    </Button>
  );
};
