import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6",
        hover && "transition-all duration-200 hover:border-muted-foreground/30 hover:bg-card/80",
        className
      )}
    >
      {children}
    </div>
  );
}
