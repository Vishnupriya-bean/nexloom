"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "glass-card overflow-hidden transition-colors duration-300",
            open === i && "border-primary/30"
          )}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-semibold text-white text-sm sm:text-base">
              {item.question}
            </span>
            <motion.svg
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-primary shrink-0"
            >
              <path d="m6 9 6 6 6-6" />
            </motion.svg>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                id={`faq-answer-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm text-white/60 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
