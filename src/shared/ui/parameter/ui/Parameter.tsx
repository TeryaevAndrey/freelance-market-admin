import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { Text } from "../../text";
import type { ParameterProps } from "../model/types";

interface Props extends HTMLAttributes<HTMLDivElement>, ParameterProps {}

export const Parameter = ({
  className,
  icon,
  name,
  valueText = "-",
}: Props) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-4 not-last:border-b py-2",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon && icon}
        <Text size="xs" color="mutedForeground">
          {name}
        </Text>
      </div>
      <div>
        {typeof valueText === "string" ? (
          <Text size="xs" color="foreground">
            {valueText}
          </Text>
        ) : (
          valueText
        )}
      </div>
    </div>
  );
};
