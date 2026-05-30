import { Section } from "@/components/ui/section";

type Insight = {
  category: string;
  title: string;
  author: string;
  date: string;
  image?: string;
};

const featuredInsight: Insight = {
  category: "GETTING STARTED",
  title: "How to transition from a traditional to a digital bank",
  author: "David Grohl",
  date: "17/08/24",
  image: "/assets/Insight.png",
};

const insightCards: Insight[] = [
  {
    category: "COMPLIANCE",
    title: "Building trust through regulatory-ready digital banking",
    author: "Sarah Chen",
    date: "02/09/24",
  },
  {
    category: "TECHNOLOGY",
    title: "Why cloud-native core systems reduce long-term IT costs",
    author: "James Miller",
    date: "21/08/24",
  },
];

function InsightCardContent({
  category,
  title,
  author,
  date,
  compact = false,
}: Insight & { compact?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col ${
        compact ? "p-5 md:p-6" : "p-6 md:p-8 lg:p-10"
      }`}
    >
      <p
        className={`font-medium uppercase tracking-wide text-n7-highlight ${
          compact ? "text-sm md:text-base" : "text-xs md:text-sm"
        }`}
      >
        {category}
      </p>
      <h3
        className={`mt-2 font-semibold leading-snug text-white ${
          compact ? "text-xl md:text-2xl lg:text-3xl" : "text-2xl md:text-3xl lg:text-4xl"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-n7-highlight ${
          compact ? "text-sm md:text-base" : "text-xs md:text-sm"
        }`}
      >
        {author} {date}
      </p>
      <button
        type="button"
        className={`font-chivo inline-flex w-full items-center justify-center rounded-xl border border-white bg-transparent tracking-wide text-white transition-colors hover:bg-white/10 md:mt-auto ${
          compact
            ? "mt-4 h-11 text-sm md:h-12 md:text-base"
            : "mt-6 h-12 text-base"
        }`}
      >
        READ MORE
      </button>
    </div>
  );
}

function InsightCard({ insight, featured = false }: { insight: Insight; featured?: boolean }) {
  if (featured && insight.image) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#01141B] p-4 md:p-5">
        <div className="grid overflow-hidden rounded-xl md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <img
            src={insight.image}
            alt=""
            className="h-48 w-full rounded-lg object-cover md:h-full md:min-h-[280px]"
          />
          <InsightCardContent {...insight} />
        </div>
      </article>
    );
  }

  return (
    <article className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#01141B]">
      <InsightCardContent {...insight} compact />
    </article>
  );
}

export function ServicesGrid() {
  return (
    <Section id="solutions">
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Insights that shape modern banking
            </h2>
            <button
              type="button"
              className="font-chivo mt-8 inline-flex h-12 items-center justify-center rounded-xl border border-white bg-transparent px-8 text-base tracking-wide text-white transition-colors hover:bg-white/10"
            >
              INSIGHTS
            </button>
          </div>

          <div className="space-y-6">
            <InsightCard insight={featuredInsight} featured />
            <div className="grid gap-6 sm:grid-cols-2">
              {insightCards.map((insight) => (
                <InsightCard key={insight.title} insight={insight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
