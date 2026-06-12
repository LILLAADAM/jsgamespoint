import { features, featuresSection } from "@data/index";
import { FeatureIcon } from "./Icons";

export default function Features() {
  return (
    <section id="features" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {featuresSection.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{featuresSection.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                <FeatureIcon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
