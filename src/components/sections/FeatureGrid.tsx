import { Section } from "@/components/ui/section";
import { ArrowRight, CreditCard, Shield, Wallet, Zap } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Core Banking",
    description:
      "Launch accounts, ledgers, and balances on a scalable core built for modern digital banks.",
  },
  {
    icon: Zap,
    title: "Payments",
    description:
      "Move money globally with real-time rails, instant transfers, and transparent settlement.",
  },
  {
    icon: CreditCard,
    title: "Cards",
    description:
      "Issue virtual and physical cards with full lifecycle controls and spend management.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description:
      "Stay audit-ready with KYC, AML, and regulatory workflows embedded in your stack.",
  },
];

export function FeatureGrid() {
  return (
    <Section id="products">
      <div className="section-container">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          All the tools you need for modern banking
        </h2>
        <p className="mt-4 max-w-xl text-slate-400">
          Everything required to design, launch, and operate a digital bank — in
          one integrated platform.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/5 bg-n7-surface/50 p-6 transition-colors hover:border-blue-500/30 hover:bg-n7-card/80"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400 ring-1 ring-blue-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
