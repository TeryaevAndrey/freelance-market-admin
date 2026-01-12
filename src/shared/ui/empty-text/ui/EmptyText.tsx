import { cn } from "@/lib/utils";
import { Text } from "../../text";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export const EmptyText = ({ className, children }: Props) => {
  return (
    <Text className={cn(className)} size="default" color="mutedForeground" fontStyle="italic">
      {children}
    </Text>
  );
};
