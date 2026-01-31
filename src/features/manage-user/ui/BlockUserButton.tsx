import { cn } from "@/lib/utils";
import { Button, type ButtonVariants } from "@/shared/ui/button";
import { CircleOff, UserCheck } from "lucide-react";
import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { useDeactivateUser } from "../model/useDeactivateUser";
import { USER_STATUSES } from "@/entities/user";
import type { WithNull } from "@/shared/types/main-types";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  userId: number;
  currentStatus?: WithNull<USER_STATUSES>;
  buttonSize?: ButtonVariants["size"];
}

export const BlockUserButton = ({
  className,
  userId,
  currentStatus,
  buttonSize = "sm",
  ...props
}: Props) => {
  const { mutate, isPending } = useDeactivateUser();

  const isBlocked = currentStatus === USER_STATUSES.BLOCKED;

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    mutate({ id: userId });
  };

  return (
    <Button
      className={cn(className)}
      variant={isBlocked ? "outline" : "destructive"}
      size={buttonSize}
      disabled={isPending}
      onClick={handleToggle}
      {...props}
    >
      {isBlocked ? <UserCheck size={16} /> : <CircleOff size={16} />}

      {!buttonSize?.includes("icon") && (
        <span className="ml-2">
          {isPending
            ? "Обработка..."
            : isBlocked
              ? "Разблокировать"
              : "Заблокировать"}
        </span>
      )}
    </Button>
  );
};
