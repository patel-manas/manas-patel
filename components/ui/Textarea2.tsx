import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea2 = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-10 w-full rounded-md focus:border focus:border-blue-900 border border-zinc-700 bg-transparent px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea2.displayName = "Textarea";

export { Textarea2 };
