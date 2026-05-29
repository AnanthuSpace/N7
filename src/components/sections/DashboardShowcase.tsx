import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";

const checklist = [
  "Real-time analytics and reporting",
  "Multi-currency account management",
  "Configurable roles and permissions",
  "API-first architecture for integrations",
];

function DashboardMock({ variant }: { variant: "donut" | "bars" }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1424] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-[140px_1fr] md:p-6">
        <div className="hidden space-y-2 md:block">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-8 rounded-lg ${i === 1 ? "bg-blue-600/30" : "bg-white/5"}`}
            />
          ))}
        </div>
        <div className="space-y-4">
          {variant === "donut" ? (
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="relative h-36 w-36 shrink-0">
                <div className="absolute inset-0 rounded-full border-[14px] border-blue-600/80 border-r-emerald-500/80 border-b-amber-500/80 border-l-violet-500/80" />
                <div className="absolute inset-6 rounded-full bg-[#0c1424]" />
              </div>
              <div className="grid flex-1 grid-cols-2 gap-2">
                {["Revenue", "Users", "Volume", "Growth"].map((label) => (
                  <div key={label} className="rounded-lg bg-white/5 p-3">
                    <p className="text-[10px] text-slate-500">{label}</p>
                    <p className="text-sm font-semibold">$24.8k</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex h-40 items-end justify-between gap-2 px-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t-md bg-gradient-to-t from-blue-700 to-blue-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          )}
          <div className="space-y-2">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex gap-2">
                <div className="h-3 flex-1 rounded bg-white/5" />
                <div className="h-3 w-16 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardShowcase() {
  return (
    <>
      <Section>
        <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <DashboardMock variant="donut" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A complete dashboard for core banking
            </h2>
            <p className="mt-4 text-slate-400">
              Monitor balances, transactions, and customer activity from a single
              unified interface built for operations teams.
            </p>
            <Button className="mt-8">Learn more</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The ultimate tool for performance and business growth
            </h2>
            <p className="mt-4 text-slate-400">
              Track KPIs, optimize conversion, and scale with insights designed
              for high-growth fintech products.
            </p>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <DashboardMock variant="bars" />
          </div>
        </div>
      </Section>
    </>
  );
}
