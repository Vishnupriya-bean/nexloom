import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest",
        "bg-primary/10 text-primary border border-primary/20",
        className
      )}
    >
      {children}
    </span>
  );
}
