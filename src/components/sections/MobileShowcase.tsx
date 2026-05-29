import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";

const mobileFeatures = [
  {
    title: "Account overview",
    points: ["Real-time balance", "Quick transfers", "Spending insights"],
    screen: "overview",
  },
  {
    title: "Analytics & transactions",
    points: ["Category breakdown", "Export statements", "Smart alerts"],
    screen: "analytics",
  },
  {
    title: "Profile & settings",
    points: ["Biometric login", "Card controls", "Support chat"],
    screen: "profile",
  },
];

function PhoneMock({ screen }: { screen: string }) {
  return (
    <div className="mx-auto w-[220px] shrink-0 rounded-[2rem] border-4 border-slate-800 bg-slate-900 p-2 shadow-xl">
      <div className="mb-2 flex justify-center">
        <div className="h-1.5 w-16 rounded-full bg-slate-700" />
      </div>
      <div className="overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-slate-800 to-slate-900 p-4">
        {screen === "overview" && (
          <>
            <div className="h-3 w-20 rounded bg-white/20" />
            <div className="mt-4 h-8 w-32 rounded bg-blue-600/40" />
            <div className="mt-6 space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 rounded-lg bg-white/5" />
              ))}
            </div>
          </>
        )}
        {screen === "analytics" && (
          <div className="flex h-44 items-end gap-1">
            {[30, 50, 40, 70, 55, 80].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-blue-500/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        )}
        {screen === "profile" && (
          <div className="space-y-3">
            <div className="mx-auto h-14 w-14 rounded-full bg-blue-600/30" />
            <div className="h-3 w-full rounded bg-white/10" />
            <div className="h-3 w-3/4 rounded bg-white/10" />
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 rounded-lg bg-white/5" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function MobileShowcase() {
  return (
    <Section light className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgb(148 163 184 / 0.15) 41px, transparent 42px)",
        }}
      />
      <div className="section-container relative">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Digital banking outside the box
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          A mobile experience your customers will love — fast, secure, and built
          for everyday financial life.
        </p>

        <div className="mt-14 space-y-16">
          {mobileFeatures.map(({ title, points, screen }, index) => (
            <div
              key={title}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <PhoneMock screen={screen} />
              <div className={index % 2 === 1 ? "md:text-right" : ""}>
                <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
                <ul
                  className={`mt-6 space-y-3 ${index % 2 === 1 ? "md:ml-auto md:w-fit" : ""}`}
                >
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
