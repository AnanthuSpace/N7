import { fadeInUp, viewport } from "@/lib/motion";
import { motion } from "framer-motion";

type TickerItem =
  | { type: "star" }
  | { type: "brand"; label: "N7" | "CB7" }
  | { type: "say" };

const tickerItems: TickerItem[] = [
  { type: "star" },
  { type: "brand", label: "N7" },
  { type: "star" },
  { type: "say" },
  { type: "star" },
  { type: "brand", label: "CB7" },
  { type: "star" },
  { type: "say" },
];

function TickerStar() {
  return (
    <img
      src="/assets/Star.png"
      alt=""
      className="h-7 w-7 shrink-0 md:h-8 md:w-8 lg:h-9 lg:w-9"
      aria-hidden
    />
  );
}

function TickerBrand({ label }: { label: "N7" | "CB7" }) {
  return (
    <span className="text-gradient-n7 text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl">
      {label}
    </span>
  );
}

function TickerSay() {
  return (
    <span className="inline-flex items-center gap-3 text-lg font-semibold tracking-wide md:text-xl lg:text-2xl">
      <span>Say</span>
      <img
        src="/assets/WaveHand.png"
        alt=""
        className="h-7 w-7 shrink-0 md:h-8 md:w-8 lg:h-9 lg:w-9"
        aria-hidden
      />
      <span>to the new way of banking</span>
    </span>
  );
}

function renderTickerItem(item: TickerItem, index: number, trackId: string) {
  switch (item.type) {
    case "star":
      return <TickerStar key={`${trackId}-star-${index}`} />;
    case "brand":
      return (
        <TickerBrand
          key={`${trackId}-brand-${item.label}-${index}`}
          label={item.label}
        />
      );
    case "say":
      return <TickerSay key={`${trackId}-say-${index}`} />;
  }
}

function TickerTrack({
  trackId,
  hidden = false,
}: {
  trackId: string;
  hidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-16 pr-16 md:gap-20 md:pr-20"
      aria-hidden={hidden || undefined}
    >
      {tickerItems.map((item, index) => renderTickerItem(item, index, trackId))}
    </div>
  );
}

export function ScrollingTicker() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      className="overflow-hidden border-y border-slate-300/20 bg-slate-100 py-12 text-slate-800 md:py-16 lg:py-20"
    >
      <div className="flex w-max animate-[ticker-scroll_35s_linear_infinite]">
        <TickerTrack trackId="a" />
        <TickerTrack trackId="b" hidden />
      </div>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </motion.div>
  );
}
