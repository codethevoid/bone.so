import NextLink from "next/link";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <span className="text-soft-foreground text-sm">
        Built by{" "}
        <NextLink
          href="https://github.com/codethevoid"
          className="hover:text-foreground underline underline-offset-1 hover:transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          codethevoid
        </NextLink>
      </span>
    </div>
  );
};
