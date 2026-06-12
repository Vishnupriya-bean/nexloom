import { cn } from "@/lib/utils";

export default function GradientText({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={cn("gradient-text", className)}>
      {children}
    </Tag>
  );
}
