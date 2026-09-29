import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-[11px] font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border border-zinc-700 bg-zinc-800 text-zinc-100",
        secondary:
          "border border-zinc-800 bg-zinc-900 text-zinc-300",
        destructive:
          "border border-rose-900/60 bg-rose-950/40 text-rose-300",
        outline:
          "border border-zinc-800 text-zinc-400",
        success:
          "border border-emerald-900/60 bg-emerald-950/40 text-emerald-300",
        warning:
          "border border-amber-900/60 bg-amber-950/40 text-amber-300",
        info:
          "border border-blue-900/60 bg-blue-950/40 text-blue-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
