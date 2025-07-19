export const example = `import { Button } from "@bonekit/ui/button";

const ButtonExample = () => {
  return <Button>Click me</Button>
};`;

export const custom = `import { Button } from "@bonekit/ui/button";

const CustomBtn = () => {
  return (
    <Button className="border-0 bg-gradient-to-tr from-blue-400 to-blue-600 text-white shadow-xl shadow-blue-600/20 hover:scale-[103%] hover:opacity-100 focus:ring-0 active:scale-[98%] dark:shadow-blue-500/20">
      Custom
    </Button>
  );
};`;

export const primary = `import { Button } from "@bonekit/ui/button";

const PrimaryBtn = () => {
  return <Button>Primary</Button>
};`;

export const soft = `import { Button } from "@bonekit/ui/button";

const SoftBtn = () => {
  return <Button variant="soft">Soft</Button>
};`;

export const outline = `import { Button } from "@bonekit/ui/button";

const OutlineBtn = () => {
  return <Button variant="outline">Outline</Button>
};`;

export const ghost = `import { Button } from "@bonekit/ui/button";

const GhostBtn = () => {
  return <Button variant="ghost">Ghost</Button>
};`;

export const danger = `import { Button } from "@bonekit/ui/button";

const DangerBtn = () => {
  return <Button variant="danger">Danger</Button>
};`;

export const link = `import { Button } from "@bonekit/ui/button";
import NextLink from "next/link";

const LinkBtn = () => {
  return (
    <Button passThrough>
      <NextLink href="https://github.com/codethevoid/bone.so" target="_blank" rel="noopener noreferrer">
        View Github
      </NextLink>
    </Button>
  );
};`;

export const manual = `import { Slot } from "@radix-ui/react-slot";
import { fuse } from "@bonekit/utils";
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
};`;
