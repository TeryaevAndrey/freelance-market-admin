import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const iconBoxVariants = cva("flex justify-center items-center border", {
  variants: {
    size: {
      sm: "size-6 rounded-sm [&>svg]:size-3",
      md: "size-8 rounded-md [&>svg]:size-4",
      lg: "size-10 rounded-lg [&>svg]:size-5",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBoxVariants> {}

export const IconBox = ({ className, children, size }: Props) => {
  return (
    <div className={cn(iconBoxVariants({ size }), className)}>{children}</div>
  );
};
