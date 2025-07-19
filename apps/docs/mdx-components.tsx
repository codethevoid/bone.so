import type { MDXComponents } from "mdx/types";
import { fuse } from "@bonekit/ui/utils";

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h2: ({ children }) => (
      <h2
        id={slugify(children.toString())}
        className={fuse(
          "mt-20 scroll-mt-18 text-2xl font-semibold max-md:text-xl",
        )}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(children.toString())}
        className="mt-10 scroll-mt-18 text-xl font-semibold max-md:text-lg"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-soft-foreground mt-2 max-md:text-sm">{children}</p>
    ),
    code: ({ children }) => (
      <code className="text-foreground bg-muted-background rounded-md px-2 py-1 font-mono text-[0.775rem]">
        {children}
      </code>
    ),
    ...components,
  };
};
