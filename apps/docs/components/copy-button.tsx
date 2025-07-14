"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="text-soft-foreground -mr-1.5 flex h-6 cursor-pointer items-center gap-1.5 rounded-md px-1.5 text-xs transition-colors hover:bg-zinc-500/5 dark:hover:bg-zinc-500/10"
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        });
      }}
    >
      <span>Copy</span>
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
};
