import { journeySection } from "@data/index";

export default function Journey() {
  return (
    <section className="border-y border-white/10 bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {journeySection.title}
        </h2>
        <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
          {journeySection.description}
        </p>
      </div>
    </section>
  );
}
