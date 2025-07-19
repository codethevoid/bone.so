"use client";

import { fuse } from "@bonekit/ui/utils";
import { CopyButton } from "./copy-button";
import { Highlight, PrismTheme } from "prism-react-renderer";
import { TerminalSquareIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@bonekit/ui/button";

const theme: PrismTheme = {
  plain: {
    color: "var(--soft-foreground)",
  },
  styles: [],
};

type Command = {
  command: string;
  label: string;
};

export const Terminal = ({
  commands,
  className,
}: {
  commands: Command[];
  className?: string;
}) => {
  const [selected, setSelected] = useState<Command>(commands[0] as Command);

  return (
    <>
      <div
        className={fuse("mt-6 overflow-hidden rounded-lg border", className)}
      >
        <div className="text-soft-foreground flex items-center justify-between border-b bg-zinc-500/5 px-3 py-1 font-mono text-xs dark:bg-zinc-500/10">
          <div className="flex items-center gap-1.5">
            <TerminalSquareIcon className="size-4.5" />
            <div className="flex items-center gap-1">
              {commands.map((c) => (
                <Button
                  key={c.label}
                  size="tiny"
                  variant={c.label === selected.label ? "outline" : "ghost"}
                  className={fuse(
                    "h-6 px-1.5 focus:ring-1",
                    selected.label === c.label && "bg-background",
                  )}
                  onClick={() => setSelected(c)}
                >
                  {c.label}
                </Button>
              ))}
            </div>
          </div>
          <CopyButton text={selected.command} />
        </div>

        <div className="hidden overflow-x-auto dark:block">
          <Highlight theme={theme} code={selected.command} language="bash">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                style={style}
                className="!bg-transparent p-3 font-mono text-[0.775rem]"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => {
                      return <span key={key} {...getTokenProps({ token })} />;
                    })}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        <div className="overflow-x-auto dark:hidden">
          <Highlight theme={theme} code={selected.command} language={"bash"}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                style={style}
                className="!bg-transparent p-3 font-mono text-[0.775rem]"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => {
                      return <span key={key} {...getTokenProps({ token })} />;
                    })}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </>
  );
};
