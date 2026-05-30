import { CtaCard } from "@/components/ui/cta-card";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const rowOnePoints = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];

const rowTwoPoints = [
  "Adaptive & Intelligent API monetization",
  "Ambient User Experience",
  "Cloud-native With lower TCO",
];

const rowThreePoints = [
  "Branchless & Paperless Banking",
  "Digital Transformation Capability",
  "Optimized, Adoptable and Scalable",
];

function ChecklistItem({ item }: { item: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-700 md:text-base">
      <span className="btn-gradient mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white">
        <Check className="h-3 w-3" />
      </span>
      {item}
    </li>
  );
}

function MobileShowcaseRowOne() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
      <div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          Digital banking out-of-the-box
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          N7 helps your financial institution improve the client experience,
          automate and optimize procedures
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <button
            type="button"
            className="btn-gradient font-chivo inline-flex h-12 items-center justify-center rounded-xl px-8 text-base tracking-wide text-white transition-opacity hover:opacity-90"
          >
            REQUEST DEMO
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-n7-highlight transition-colors hover:opacity-80"
          >
            <span className="underline underline-offset-4">LEARN MORE</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        <img
          src="/assets/iPhone%201.png"
          alt="Mobile banking app preview"
          className="mx-auto w-full max-w-[220px] object-contain md:max-w-none"
        />
        <div>
          <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
            Fully compliant with regulatory requirement
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            The governance of risk management with regulations is achieved by
            our risk management framework that is fully integrated to work with
            digital bank&apos;s operational-risk protocols and procedures.
          </p>
          <ul className="mt-6 space-y-4">
            {rowOnePoints.map((point) => (
              <ChecklistItem key={point} item={point} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileShowcaseRowTwo() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
      <div aria-hidden className="hidden md:block" />

      <div className="grid items-center gap-8 md:col-start-2 md:grid-cols-2 md:gap-10">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
            No legacy IT systems
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Our Digital Banking solution and multilayered approach help financial
            institutions take advantage of digital transformation by ensuring
            customer trust and regulatory compliance.
          </p>
          <ul className="mt-6 space-y-4">
            {rowTwoPoints.map((point) => (
              <ChecklistItem key={point} item={point} />
            ))}
          </ul>
        </div>
        <img
          src="/assets/iPhone%202.png"
          alt="Mobile analytics app preview"
          className="mx-auto w-full max-w-[220px] object-contain md:max-w-none"
        />
      </div>
    </div>
  );
}

function MobileShowcaseRowThree() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
      <div aria-hidden className="hidden md:block" />

      <div className="grid items-center gap-8 md:col-start-2 md:grid-cols-2 md:gap-10">
        <img
          src="/assets/iPhone%203.png"
          alt="Mobile profile app preview"
          className="mx-auto w-full max-w-[220px] object-contain md:max-w-none"
        />
        <div>
          <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
            No traditional branches
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Our Digital Banking out-of-the-box helps you to accelerate innovation
            while reducing risks and optimising operational costs for a seamless
            branchless experience.
          </p>
          <ul className="mt-6 space-y-4">
            {rowThreePoints.map((point) => (
              <ChecklistItem key={point} item={point} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MobileShowcase() {
  return (
    <Section light animate={false} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgb(148 163 184 / 0.15) 41px, transparent 42px)",
        }}
      />
      <div className="section-container relative">
        <motion.div
          className="space-y-16 md:space-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <MobileShowcaseRowOne />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <MobileShowcaseRowTwo />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <MobileShowcaseRowThree />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CtaCard
              title="Take the full advantage of going paper-less now."
              description="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations ."
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
