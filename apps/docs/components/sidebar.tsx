"use client";

import items from "../content/docs/docs.json";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { fuse } from "@bonekit/ui/utils";

export const Sidebar = () => {
  const path = usePathname();

  return (
    <nav className="sticky top-[53px] h-[calc(100dvh-var(--nav-height))] min-w-72 space-y-8 overflow-y-auto border-r p-6">
      {items.groups.map((group) => (
        <div key={group.group} className="space-y-3">
          <h3 className="text-soft-foreground font-mono text-[0.7rem] tracking-widest uppercase">
            {group.group}
          </h3>
          <ul className="space-y-2 border-l">
            {group.pages.map((item) => (
              <li
                key={item.href}
                className={fuse(
                  "text-soft-foreground relative right-[1px] flex border-l text-sm transition-colors",
                  path === item.href
                    ? "border-primary text-foreground"
                    : "hover:border-primary/30 border-transparent",
                )}
              >
                <NextLink href={item.href} className="w-full pl-4">
                  {item.title}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
