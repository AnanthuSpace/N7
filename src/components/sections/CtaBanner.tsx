export function CtaBanner() {
  return (
    <section className="bg-black">
      <div className="section-container py-12 md:py-16">
        <div className="relative min-h-[240px] overflow-hidden rounded-3xl sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px]">
          <img
            src="/assets/CB7.png"
            alt=""
            className="absolute inset-0 h-full w-full rounded-3xl object-cover object-center"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12 md:py-16">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Take the full advantage of going paper-less now.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
                CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="font-chivo inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base tracking-wide text-white transition-colors hover:bg-white/10"
              >
                CONTACT US
              </button>
              <button
                type="button"
                className="btn-gradient font-chivo inline-flex h-12 items-center justify-center rounded-md px-8 text-base tracking-wide text-white transition-opacity hover:opacity-90"
              >
                REQUEST DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
