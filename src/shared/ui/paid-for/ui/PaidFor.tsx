import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { Progress } from "../../progress";
import { Text } from "../../text";

interface Props extends HTMLAttributes<HTMLDivElement> {
  totalPrice?: number | string;
  paid?: number | string;
}

export const PaidFor = ({ className, totalPrice = 0, paid = 0 }: Props) => {
  const total =
    typeof totalPrice === "string"
      ? parseFloat(totalPrice.replace(/\s/g, ""))
      : totalPrice;
  const currentPaid =
    typeof paid === "string" ? parseFloat(paid.replace(/\s/g, "")) : paid;

  const percentage = total > 0 ? Math.round((currentPaid / total) * 100) : 0;

  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex flex-col gap-0.5">
        <Progress value={clampedPercentage} />
        <Text className="opacity-50" size="xs">
          {percentage}% оплачено
        </Text>
      </div>
      <Text size="xs" color="foreground">
        {typeof paid === "string" ? paid : `${paid} Р`} / <br />{" "}
        <span className="opacity-50">
          {typeof totalPrice === "string" ? totalPrice : `${totalPrice} Р`}
        </span>
      </Text>
    </div>
  );
};
