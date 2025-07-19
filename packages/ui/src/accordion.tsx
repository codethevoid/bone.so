"use client";

import { Accordion as AccordionBase } from "@base-ui-components/react";
import { ComponentProps, createContext, ReactNode, useContext } from "react";
import { fuse } from "./utils";
import { ChevronLeft } from "lucide-react";

type AccordionVariant = "minimal" | "shaped";

const AccordionVariantContext = createContext<AccordionVariant>("minimal");
const useAccordionVariant = () => useContext(AccordionVariantContext);

const Accordion = ({
  variant = "minimal",
  className,
  ...props
}: ComponentProps<typeof AccordionBase.Root> & {
  variant?: AccordionVariant;
  className?: string;
}) => {
  return (
    <AccordionVariantContext value={variant}>
      <AccordionBase.Root
        {...props}
        className={fuse(variant === "shaped" ? "space-y-2" : "", className)}
      />
    </AccordionVariantContext>
  );
};

const AccordionItem = ({
  className,
  ...props
}: ComponentProps<typeof AccordionBase.Item> & {
  className?: string;
}) => {
  const variant = useAccordionVariant();

  return (
    <AccordionBase.Item
      {...props}
      className={fuse(
        variant === "minimal"
          ? "border-b last:border-b-0"
          : "rounded-lg bg-muted-background px-2.5 border border-border/30",
        className,
      )}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionBase.Trigger> & {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <AccordionBase.Header>
      <AccordionBase.Trigger
        {...props}
        className={fuse(
          "cursor-pointer w-full group max-md:text-sm text-left flex items-center justify-between py-3 gap-3",
          className,
        )}
      >
        {children}
        <ChevronLeft className="size-4 text-soft-foreground shrink-0 group-data-[panel-open]:-rotate-90 transition-transform ease" />
      </AccordionBase.Trigger>
    </AccordionBase.Header>
  );
};

const AccordionPanel = ({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionBase.Panel> & {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <AccordionBase.Panel
      {...props}
      className={
        "h-[var(--accordion-panel-height)] text-sm group overflow-hidden transition-[height_opacity] ease data-[ending-style]:h-0 data-[starting-style]:h-0"
      }
    >
      <div
        className={fuse(
          "pb-3 group-data-[starting-style]:opacity-0 group-data-[ending-style]:opacity-100 transition-[opacity_transform] duration-300 ease delay-75 group-data-[starting-style]:scale-[97%] group-data-[ending-style]:scale-100",
          className,
        )}
      >
        {children}
      </div>
    </AccordionBase.Panel>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
