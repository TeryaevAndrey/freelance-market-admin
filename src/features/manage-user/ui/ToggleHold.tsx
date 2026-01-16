import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { WalletCards } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ToggleHold = ({ className }: Props) => {
  return (
    <Button className={cn(className)} variant="outline" size="sm">
      <WalletCards />
      <span>Поставить/снять холд</span>
    </Button>
  );
};
