import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <div className="section-container py-8 md:py-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-n7-surface px-6 py-10 md:px-8 md:py-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Take the full advantage of going paperless now.
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Digitize your workflows and deliver a seamless banking experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">Learn more</Button>
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
