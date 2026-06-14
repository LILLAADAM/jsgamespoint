import Link from "next/link";
import { inviteEarnPage, site } from "@data/index";
import { ChevronIcon, StarIcon } from "@/components/Icons";

export default function InviteEarnContent() {
  const whatsappUrl = `https://wa.me/${site.whatsapp.replace("+", "")}`;
  const { hero, howItWorks, benefits, rewards, faq, cta } = inviteEarnPage;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-400">
            {hero.badge}
          </span>
          <h1 className="font-display mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">{hero.subtitle}</p>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-amber-500/30 bg-amber-500/10 px-6 py-5">
            <p className="font-display text-lg font-semibold text-amber-300">{hero.status}</p>
            <p className="mt-2 text-sm text-amber-200/80">{hero.statusMessage}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="how-it-works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="how-it-works" className="font-display text-3xl font-bold text-white">
              {howItWorks.title}
            </h2>
            <p className="mt-4 text-zinc-400">{howItWorks.subtitle}</p>
          </div>
          <ol className="mt-14 grid gap-6 sm:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <li
                key={step.id}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center"
              >
                <span className="font-display text-3xl font-bold text-blue-500">{step.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 py-16 sm:py-20" aria-labelledby="benefits">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="benefits" className="font-display text-3xl font-bold text-white">
              {benefits.title}
            </h2>
            <p className="mt-4 text-zinc-400">{benefits.subtitle}</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-black p-6 transition-colors hover:border-blue-500/30"
              >
                <StarIcon className="h-6 w-6 text-blue-400" />
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="rewards">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="rewards" className="font-display text-3xl font-bold text-white">
              {rewards.title}
            </h2>
            <p className="mt-4 text-zinc-400">{rewards.subtitle}</p>
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-blue-500/10 to-transparent p-8">
            <p className="text-center text-zinc-300">{rewards.message}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {rewards.preview.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3"
                >
                  <dt className="text-sm text-zinc-400">{row.label}</dt>
                  <dd className="text-sm font-semibold text-blue-400">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950 py-16 sm:py-20" aria-labelledby="invite-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="invite-faq" className="font-display text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faq.map((item) => (
              <details
                key={item.id}
                className="group rounded-2xl border border-white/10 bg-black"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-white marker:content-none">
                  {item.question}
                  <ChevronIcon className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-zinc-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{cta.title}</h2>
          <p className="mt-4 text-zinc-400">{cta.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 sm:w-auto"
            >
              {cta.primary}
            </a>
            <Link
              href="/#contact"
              className="w-full rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-white hover:border-blue-500/40 sm:w-auto"
            >
              {cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
