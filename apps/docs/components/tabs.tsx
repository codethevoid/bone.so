import * as React from "react";
import { ComponentProps } from "react";
import { Tabs as TabsBase } from "@base-ui-components/react/tabs";
import { fuse } from "@bonekit/ui/utils";

const Tabs = ({
  className,
  ...props
}: ComponentProps<typeof TabsBase.Root> & { className?: string }) => {
  return <TabsBase.Root {...props} className={fuse("mt-6", className)} />;
};

const TabsList = ({
  className,
  ...props
}: ComponentProps<typeof TabsBase.List> & { className?: string }) => {
  return (
    <TabsBase.List
      {...props}
      className={fuse("flex items-center gap-1", className)}
    />
  );
};

const Tab = ({
  className,
  ...props
}: ComponentProps<typeof TabsBase.Tab> & { className?: string }) => {
  return (
    <TabsBase.Tab
      {...props}
      className={fuse(
        "data-[selected]:text-foreground text-soft-foreground inline-flex h-8 cursor-pointer items-center justify-center px-3 text-sm font-medium",
        className,
      )}
    />
  );
};

const TabPanel = ({
  className,
  ...props
}: ComponentProps<typeof TabsBase.Panel> & { className?: string }) => {
  return <TabsBase.Panel {...props} className={fuse("", className)} />;
};

const TabIndicator = ({
  className,
  ...props
}: ComponentProps<typeof TabsBase.Indicator> & { className?: string }) => {
  return (
    <TabsBase.Indicator
      {...props}
      className={fuse(
        "ease bg-muted-background absolute top-1/2 left-0 z-[-1] h-8 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-lg transition-all",
        className,
      )}
    />
  );
};

export { Tabs, TabsList, Tab, TabPanel, TabIndicator };
