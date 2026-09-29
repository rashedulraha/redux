import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900",
        secondary:
          "border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100",
        destructive:
          "border-transparent bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-200/50 dark:border-rose-900/50",
        outline:
          "text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800",
        success:
          "border-transparent bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/50",
        warning:
          "border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/50",
        info: "border-transparent bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/50",
        purple:
          "border-transparent bg-purple-500/15 text-purple-700 dark:text-purple-400 border border-purple-200/50 dark:border-purple-900/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
