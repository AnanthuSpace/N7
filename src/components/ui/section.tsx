import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
};

export function Section({ children, className, id, light }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative py-14 md:py-20",
        light ? "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900" : "",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}
