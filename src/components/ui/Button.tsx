import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap";

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-white shadow-md hover:shadow-primary/40 hover:scale-[1.03]",
  outline:
    "border border-white/20 text-white/80 hover:text-white hover:border-primary/60 hover:bg-primary/10 bg-transparent",
};

const sizes = {
  sm: "text-sm h-9 px-4",
  md: "text-sm h-11 px-5",
  lg: "text-base h-12 px-7",
};

export default function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  href,
  onClick,
  className,
  children,
  type = "button",
  disabled,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {arrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, "group", disabled && "opacity-50 cursor-not-allowed")}
    >
      {content}
    </button>
  );
}
