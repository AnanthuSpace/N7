import { FooterGradientArrow } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

type CaseStudy = {
  category: string;
  title: string;
  brand: string;
  icon: string;
};

const caseStudies: CaseStudy[] = [
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    brand: "Zoomer",
    icon: "/assets/Zoomer.png",
  },
  {
    category: "CASE STUDY",
    title: "Scaling digital banking for a modern fintech leader",
    brand: "SmartFinder",
    icon: "/assets/Smartfinder.png",
  },
  {
    category: "SUCCESS STORY",
    title: "Transforming customer experience with cloud-native core",
    brand: "Shells",
    icon: "/assets/Shells.png",
  },
];

function CaseStudyCard({
  study,
  className = "",
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#01141B] p-4 shadow-xl shadow-black/40 md:p-5 ${className}`}
    >
      <div className="grid overflow-hidden rounded-xl md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="p-4 md:p-5">
          <img
            src="/assets/Insight.png"
            alt=""
            className="h-48 w-full rounded-lg object-cover md:h-full md:min-h-[240px]"
          />
        </div>
        <div className="flex h-full flex-col items-start px-6 py-8 text-left md:px-8 md:py-10">
          <p className="text-sm font-medium uppercase tracking-wide text-n7-highlight">
            {study.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold leading-snug text-white md:text-2xl lg:text-3xl">
            {study.title}
          </h3>
          <div className="mt-6 flex items-center gap-3">
            <img
              src={study.icon}
              alt=""
              className="h-10 w-auto shrink-0 object-contain md:h-12"
            />
            <p className="text-sm font-medium uppercase tracking-wide text-slate-300 md:text-base">
              {study.brand}
            </p>
          </div>
          <button
            type="button"
            className="font-chivo mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl border border-white bg-transparent text-base tracking-wide text-white transition-colors hover:bg-white/10 md:mt-auto"
          >
            READ MORE
          </button>
        </div>
      </div>
    </article>
  );
}

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = caseStudies.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const active = caseStudies[activeIndex];
  const prev = caseStudies[(activeIndex - 1 + total) % total];
  const next = caseStudies[(activeIndex + 1) % total];

  return (
    <Section>
      <div className="section-container">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Our Case Studies
        </h2>

        <div className="relative mx-auto mt-10 w-full max-w-6xl overflow-visible px-4 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute z-0 hidden w-full md:block md:-translate-x-[18%] md:scale-[0.98] lg:-translate-x-[20%]"
            >
              <CaseStudyCard
                study={prev}
                className="border-white/5 brightness-[0.45] opacity-75 saturate-[0.7] shadow-2xl shadow-black/50"
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute z-0 hidden w-full md:block md:translate-x-[18%] md:scale-[0.98] lg:translate-x-[20%]"
            >
              <CaseStudyCard
                study={next}
                className="border-white/5 brightness-[0.45] opacity-75 saturate-[0.7] shadow-2xl shadow-black/50"
              />
            </div>

            <div className="relative z-10 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <CaseStudyCard study={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative mt-8 flex items-center justify-center">
          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white md:h-11 md:w-11"
              aria-label="Previous case study"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Case study slides">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-n7-highlight"
                      : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white md:h-11 md:w-11"
              aria-label="Next case study"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>

          <a
            href="#"
            className="absolute right-0 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-80 md:text-base"
          >
            <span className="text-gradient-n7">VIEW ALL</span>
            <FooterGradientArrow />
          </a>
        </div>
      </div>
    </Section>
  );
}
