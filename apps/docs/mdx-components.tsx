import type { MDXComponents } from "mdx/types";

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
        className="mt-20 scroll-mt-18 text-2xl font-semibold"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(children.toString())}
        className="mt-10 scroll-mt-18 text-xl font-semibold"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-soft-foreground mt-2">{children}</p>
    ),
    code: ({ children }) => (
      <code className="text-foreground rounded-md bg-zinc-500/15 px-2 py-1 font-mono text-[0.775rem] dark:bg-zinc-500/15">
        {children}
      </code>
    ),
    ...components,
  };
};
