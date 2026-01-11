import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type JSX } from "react";

export const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      default: "text-sm md:text-base",
      xl: "text-xl",
      "3xl": "text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      foreground: "text-foreground",
    },
  },
  defaultVariants: {
    size: "default",
    weight: "normal",
    color: "foreground",
  },
});

type Tag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type Props<T extends Tag = "p"> = HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    tag?: Tag;
  } & JSX.IntrinsicElements[T];

export const Text = ({
  className,
  children,
  tag,
  size,
  color,
  weight,
  ...props
}: Props) => {
  const Component = tag || "p";

  return (
    <Component
      className={cn(textVariants({ size, color, weight }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
