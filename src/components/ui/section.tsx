import { fadeInUp, viewport } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
  animate?: boolean;
};

export function Section({
  children,
  className,
  id,
  light,
  animate = true,
}: SectionProps) {
  const classes = cn(
    "relative py-14 md:py-20",
    light ? "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900" : "",
    className,
  );

  if (!animate) {
    return (
      <section id={id} className={classes}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      className={classes}
    >
      {children}
    </motion.section>
  );
}
