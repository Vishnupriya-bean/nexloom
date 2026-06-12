import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-card",
        hover && "transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]",
        className
      )}
    >
      {children}
    </div>
  );
}
