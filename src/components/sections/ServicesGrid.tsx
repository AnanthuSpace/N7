import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";

function StarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-blue-500" aria-hidden>
      <path
        fill="currentColor"
        d="M24 4 L28 20 L44 24 L28 28 L24 44 L20 28 L4 24 L20 20 Z"
        opacity="0.9"
      />
      <path
        fill="currentColor"
        d="M24 12 L26 20 L34 22 L26 24 L24 32 L22 24 L14 22 L22 20 Z"
        opacity="0.5"
      />
    </svg>
  );
}

const services = [
  {
    title: "API Infrastructure",
    description:
      "RESTful APIs and webhooks to connect your product to the N7 core.",
  },
  {
    title: "White-label Banking",
    description:
      "Launch under your brand with customizable UI and customer journeys.",
  },
  {
    title: "Risk & Fraud",
    description:
      "ML-powered monitoring and rules to protect your users and business.",
  },
  {
    title: "Global Rails",
    description:
      "Cross-border payments and multi-currency support out of the box.",
  },
];

export function ServicesGrid() {
  return (
    <Section id="solutions">
      <div className="section-container">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Everything you need to build a digital bank
        </h2>
        <p className="mt-4 max-w-xl text-slate-400">
          Modular capabilities that scale from MVP to enterprise-grade operations.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map(({ title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/5 bg-n7-surface p-8 transition-colors hover:border-blue-500/20"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600/10 ring-1 ring-blue-500/20">
                <StarIcon />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
