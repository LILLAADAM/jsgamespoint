import { hero } from "@data/index";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pt-24 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-400 uppercase">
            {hero.badge}
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#games"
              className="w-full rounded-xl bg-blue-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 sm:w-auto"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#features"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur transition-all hover:border-blue-500/40 hover:bg-white/10 sm:w-auto"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
            >
              <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
