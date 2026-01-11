import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export const Progress = ({ className, value = 0 }: Props) => {
  return (
    <div className={cn("relative min-w-20 h-2 rounded", className)}>
      <div
        className={cn("absolute left-0 top-0 bottom-0 rounded", {
          "bg-orange-500": value < 25,
          "bg-green-500": value >= 25,
        })}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
