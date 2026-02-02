import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { copyText } from "@/shared/utils/copyText";
import { Copy } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  userId: number;
}

export const CopyUserIdButton = ({className, userId}: Props) => {
  return (
    <Button className={cn(className)} variant="outline" size="sm" onClick={() => copyText(String(userId))}>
      <Copy />
      <span>Копировать ID</span>
    </Button>
  );
};
