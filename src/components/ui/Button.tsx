import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "outline" | "outlineWhite";
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
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[11px] transition-all duration-150 whitespace-nowrap";

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-white hover:brightness-110 hover:-translate-y-px",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors duration-300",
  outlineWhite:
    "border border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 transition-colors duration-300",
};

const sizes = {
  sm: "text-[14px] px-[16px] py-[8px]",
  md: "text-[15px] px-[22px] py-[12px]",
  lg: "text-[16px] px-[30px] py-[15px]",
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
        <span className="ml-0.5 transition-transform group-hover:translate-x-1 text-[1.1em] leading-none">
          →
        </span>
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
