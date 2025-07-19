import { ReactNode } from "react";

export const Showcase = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-6 flex min-h-72 items-center justify-center rounded-t-lg border p-8">
      {children}
    </div>
  );
};
