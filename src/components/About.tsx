import { aboutSection } from "@data/index";

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {aboutSection.title}
          </h2>
          <p className="mt-4 text-lg font-medium text-blue-400">{aboutSection.subtitle}</p>
          <p className="mt-6 text-base leading-8 text-zinc-400">{aboutSection.intro}</p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold text-white">{aboutSection.approachTitle}</h3>
          <p className="mt-3 text-zinc-400">{aboutSection.approach}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {aboutSection.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl border border-white/10 bg-black p-6 text-center transition-all hover:border-blue-500/30"
            >
              <h3 className="font-display text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
