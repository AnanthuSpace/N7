import { CtaCard, type CtaCardProps } from "@/components/ui/cta-card";
import { fadeInUp, viewport } from "@/lib/motion";
import { motion } from "framer-motion";

const defaultCta: CtaCardProps = {
  title: "Take the full advantage of going paper-less now.",
  description:
    "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations .",
  backgroundImage: "/assets/CB7.png",
  secondaryLabel: "CONTACT US",
  primaryLabel: "REQUEST DEMO",
};

type CtaBannerProps = Partial<CtaCardProps> & {
  transparent?: boolean;
};

export function CtaBanner({ transparent = false, ...props }: CtaBannerProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      className={transparent ? "bg-transparent" : "bg-n7-bg"}
    >
      <div className="section-container py-12 md:py-16">
        <CtaCard {...defaultCta} {...props} />
      </div>
    </motion.section>
  );
}

export { CtaCard };
