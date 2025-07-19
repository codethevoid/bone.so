import { Slot } from "@radix-ui/react-slot";
import { fuse } from "./utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const btnVariants = cva(
  "inline-flex items-center border border-transparent justify-center rounded-lg cursor-pointer font-medium ease outline-none gap-1.5 focus:ring-3 ring-primary/15 dark:ring-primary/20 transition-all disabled:opacity-60 disabled:pointer-events-none ease",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-btn-primary-foreground hover:opacity-90 focus:opacity-100 shadow-md shadow-primary/20",
        soft: "bg-soft text-foreground bg-primary/5 dark:bg-primary/10 hover:opacity-80 dark:hover:opacity-90 focus:opacity-100",
        outline: "border-border text-foreground hover:border-primary/20",
        ghost: "text-foreground hover:bg-primary/5 dark:hover:bg-primary/10",
        danger:
          "hover:opacity-90 focus:opacity-100 bg-red-600 text-white ring-red-500/20 dark:ring-red-500/25",
      },
      size: {
        tiny: "h-7 px-2.5 text-[0.8rem] font-normal",
        small: "h-8 px-3 text-sm",
        default: "h-9 px-3.5 text-[0.9rem]",
        large: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export const Button = ({
  className,
  variant,
  size,
  passThrough = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof btnVariants> & { passThrough?: boolean }) => {
  const Component = passThrough ? Slot : "button";

  return (
    <Component
      className={fuse(btnVariants({ variant, size, className }))}
      {...props}
    />
  );
};
