import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { CircleOff } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BlockUserButton = ({className}: Props) => {
  return (
    <Button className={cn(className)} variant="destructive" size="sm">
      <CircleOff />
      <span>Заблокировать</span>
    </Button>
  );
};
