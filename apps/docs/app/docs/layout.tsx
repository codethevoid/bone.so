import { Nav } from "../../components/nav";
import { ReactNode } from "react";
import { Sidebar } from "../../components/sidebar";

export default async function DocsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Nav />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
