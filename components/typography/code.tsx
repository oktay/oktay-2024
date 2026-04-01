"use client";

import React from "react";

import { useClipboardCopy } from "@/lib/hooks";
import { cn, extractCodeText } from "@/lib/utils";

export function CodeBlock({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const codeText = extractCodeText(children);
  const { copied, copy } = useClipboardCopy(codeText);

  return (
    <div className="group relative my-6 min-w-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex h-9 items-center rounded-t-lg border-b border-border/70 bg-card/70 px-3">
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground/85">
          Code
        </span>
      </div>

      <button
        type="button"
        onClick={copy}
        className="absolute right-2 top-1.5 z-10 rounded-md border border-border/70 bg-card/70 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <pre
        {...props}
        className={cn(
          "w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-lg border border-border bg-muted/35 px-4 pb-4 pt-12 text-sm [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [&_code]:block [&_code]:min-w-max [&_code]:whitespace-pre",
          className,
        )}
      >
        {children}
      </pre>
    </div>
  );
}

export function InlineCode({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      {...props}
      className={cn(
        "rounded bg-muted/50 px-1.5 py-0.5 text-[0.85em] font-mono break-words [overflow-wrap:anywhere]",
        className,
      )}
    />
  );
}
