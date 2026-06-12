import { globalReachSection, globalStats } from "@data/index";

export default function GlobalReach() {
  return (
    <section className="bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {globalReachSection.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{globalReachSection.subtitle}</p>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {globalStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-black p-6 text-center"
            >
              <dt className="font-display text-3xl font-bold text-blue-400 sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm font-medium text-zinc-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
