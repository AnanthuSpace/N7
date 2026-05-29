import { Button } from "@/components/ui/button";

const partners = [
  { name: "SHELLS", icon: "/assets/Shells.png" },
  { name: "SmartFinder", icon: "/assets/Smartfinder.png" },
  { name: "ArtVenue", icon: "/assets/Artvenue.png" },
  { name: "Kontrastr", icon: "/assets/Kontraster.png" },
  { name: "Zoomer", icon: "/assets/Zoomer.png" },
  { name: "WAVESMARATHON", icon: "/assets/Wavesmarathon.png" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col justify-center overflow-hidden py-10 md:py-14">
      <div className="section-container relative grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="w-full">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            The new foundation of modern banking
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            We drive innovation and growth, provide seamless customer experience and operational excellence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg">REQUEST DEMO</Button>
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-[#2F2F2F] px-8 text-base font-medium tracking-wide text-white transition-colors hover:bg-white/10"
            >
              CONTACT US
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full items-center justify-center lg:-mr-12">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[65px]"
            style={{
              background:
                "linear-gradient(180deg, #00B4FD 0%, #003ACE 100%)",
            }}
          />

          <img
            src="/assets/hero.png"
            alt="N7 banking app with balance overview and recent activity"
            className="relative z-10 w-full max-w-[820px] drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="section-container mt-12 md:mt-16">
        <div className="flex flex-wrap items-center justify-start gap-x-10 gap-y-6 border-y border-white/5 py-8 opacity-80">
          {partners.map(({ name, icon }) => (
            <span
              key={name}
              className="inline-flex items-center gap-0 text-lg font-semibold tracking-wide text-slate-300 uppercase"
            >
              <img src={icon} alt={`${name} logo`} className="h-7 w-7 object-contain" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
