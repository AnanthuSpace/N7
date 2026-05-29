import { Section } from "@/components/ui/section";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CaseStudies() {
  return (
    <Section>
      <div className="section-container">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Our Case Studies
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-n7-surface">
          <div className="grid md:grid-cols-2">
            <div className="flex min-h-[220px] items-center justify-center bg-gradient-to-br from-blue-600/30 to-blue-900/20 p-10">
              <svg viewBox="0 0 120 120" className="h-28 w-28 text-blue-400" aria-hidden>
                <path
                  fill="currentColor"
                  d="M60 10 L72 48 L110 60 L72 72 L60 110 L48 72 L10 60 L48 48 Z"
                />
                <path
                  fill="currentColor"
                  opacity="0.5"
                  d="M60 30 L66 50 L86 56 L66 62 L60 82 L54 62 L34 56 L54 50 Z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <h3 className="text-2xl font-semibold">
                How we help and empower our people
              </h3>
              <p className="mt-4 text-slate-400">
                See how leading fintech teams use N7 to launch faster, reduce
                operational overhead, and deliver better customer experiences.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Read case study
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white"
            aria-label="Previous"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white"
            aria-label="Next"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
