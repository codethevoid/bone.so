"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@bonekit/ui/button";

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="ghost"
      size="tiny"
      className="text-soft-foreground -mr-1.5 h-6 gap-1.5 px-1.5 focus:ring-1"
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
    </Button>
  );
};
