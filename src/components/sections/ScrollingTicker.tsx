const tickerItems = [
  "Is the new way of banking",
  "N7",
  "Sky",
  "Stripe",
  "Visa",
];

export function ScrollingTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-slate-300/20 bg-slate-100 py-4 text-slate-800">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm font-semibold tracking-wide uppercase"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
