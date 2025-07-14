import { type ReactNode } from "react";
import "./styles/globals.css";

export const BonePortal = ({ children }: { children: ReactNode }) => {
  return <div className="root">{children}</div>;
};
