"use client";

import { Highlight, themes } from "prism-react-renderer";
import { fuse } from "@bonekit/ui/utils";
import { useState } from "react";
import { CopyButton } from "./copy-button";

export const CodeBlock = ({
  filename,
  code,
  className,
  language = "tsx",
  expandable = false,
  withShowcase = true,
}: {
  className?: string;
  filename?: string;
  code: string;
  language?: string;
  expandable?: boolean;
  withShowcase?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        className={fuse(
          "relative overflow-hidden border",
          withShowcase ? "rounded-b-lg border-t-0" : "rounded-lg",
          className,
        )}
      >
        {filename && (
          <div className="text-soft-foreground flex items-center justify-between border-b bg-zinc-500/5 px-3 py-1 font-mono text-xs dark:bg-zinc-500/10">
            <span>{filename}</span>
            <CopyButton text={code} />
          </div>
        )}
        <div
          className={fuse(
            "hidden dark:block",
            expandable ? "h-52 overflow-hidden" : "overflow-x-auto",
            expanded ? "h-auto overflow-x-auto" : "",
          )}
        >
          <Highlight theme={themes.nightOwl} code={code} language={language}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                style={style}
                className="!bg-transparent p-3 font-mono text-[0.775rem]"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="pr-4 font-mono text-zinc-600">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    {line.map((token, key) => {
                      return (
                        <span
                          key={key}
                          {...getTokenProps({ token })}
                          className="!not-italic"
                        />
                      );
                    })}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        <div
          className={fuse(
            "dark:hidden",
            expandable ? "h-52 overflow-hidden" : "overflow-x-auto",
            expanded ? "h-auto overflow-x-auto" : "",
          )}
        >
          <Highlight
            theme={themes.nightOwlLight}
            code={code}
            language={language}
          >
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                style={style}
                className="!bg-transparent p-3 font-mono text-[0.775rem]"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="pr-4 font-mono text-zinc-400">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    {line.map((token, key) => {
                      return (
                        <span
                          key={key}
                          {...getTokenProps({ token })}
                          className="!not-italic"
                        />
                      );
                    })}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        {expandable && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className={fuse(
              "text-soft-foreground w-full cursor-pointer border-t bg-zinc-500/5 py-2 text-center text-xs backdrop-blur-md transition-colors hover:bg-zinc-500/10 dark:bg-zinc-500/10 dark:hover:bg-zinc-500/15",
              !expanded ? "absolute inset-x-0 bottom-0" : "",
            )}
          >
            {expanded ? "Hide code" : "Show code"}
          </button>
        )}
      </div>
    </>
  );
};
