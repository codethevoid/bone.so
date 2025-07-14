import { ThemeProvider } from "next-themes";
import { BonePortal } from "@bonekit/ui/bone-portal";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <BonePortal>{children}</BonePortal>
    </ThemeProvider>
  );
};
