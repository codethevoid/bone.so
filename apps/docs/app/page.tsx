import { ChevronRight, Skull } from "lucide-react";
import { Button } from "@bonekit/ui/button";
import NextLink from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center px-6">
      <div className="max-w-sm space-y-6">
        <Skull className="text-foreground" />
        <div className="space-y-2">
          <h1 className="text-xl text-balance">
            A modern UI toolkit for building beautiful and accessible web
            experiences{" "}
          </h1>
          <p className="text-soft-foreground">
            Clean design meets solid foundations{" "}
          </p>
        </div>
        <Button passThrough>
          <NextLink href="/docs/overview/introduction">
            Get started
            <ChevronRight className="size-4" />
          </NextLink>
        </Button>
      </div>
    </main>
  );
}
