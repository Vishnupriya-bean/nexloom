export default function ChevronIcon({ className = "w-4 h-4", direction = "down" }: { className?: string; direction?: "up" | "down" | "left" | "right" }) {
  const paths = {
    down: "m6 9 6 6 6-6",
    up: "m18 15-6-6-6 6",
    left: "m15 18-6-6 6-6",
    right: "m9 18 6-6-6-6",
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={paths[direction]} />
    </svg>
  );
}
