import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({
  id,
  className,
  innerClassName,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-28 bg-[hsl(222,47%,11%)]", className)}>
      <div
        className={cn(
          "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
