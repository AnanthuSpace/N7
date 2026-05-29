import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: "/assets/Core.png",
    title: "Core Banking CB7",
    sub: "",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: "/assets/Digital.png",
    title: "Digital Banking N7",
    sub: "",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
  },
  {
    icon: "/assets/OpenBank.png",
    title: "Open Banking",
    sub: "",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: "/assets/Loan.png",
    title: "Loan Origination System",
    sub: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "/assets/LoanM.png",
    title: "Loan Management System",
    sub: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
  },
];

export function FeatureGrid() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 right-0 z-0 aspect-square w-[24%] -translate-y-1/2 translate-x-1/4 rounded-full opacity-70 blur-[110px]"
        style={{
          background: "linear-gradient(180deg, #0077B6 0%, #001E6C 100%)",
        }}
      />
      <Section id="products">
      <div className="section-container relative grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            All of our solutions are tailor-made to your needs
          </h2>
          <button
            type="button"
            className="font-chivo mt-8 inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base tracking-wide text-white transition-colors hover:bg-white/10"
          >
            REQUEST DEMO
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ icon, title, sub, description }, index) => (
            <article
              key={index}
              className="group flex min-h-[320px] flex-col justify-between rounded-2xl bg-n7-surface/50 p-6 transition-colors hover:bg-n7-card/80"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="h-12 w-12 object-contain"
                  />
                  {sub && (
                    <span className="rounded-full bg-blue-600/15 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-blue-500/20">
                      {sub}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </div>

              <a
                href="#"
                className="mt-6 flex w-full items-center justify-between text-sm font-medium text-blue-400 uppercase tracking-wide transition-colors group-hover:text-blue-300"
              >
                <span className="underline underline-offset-4">LEARN MORE</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
      </Section>
    </div>
  );
}
