import { productsSection } from "@data/index";

export default function Products() {
  return (
    <section id="products" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {productsSection.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">{productsSection.subtitle}</p>

        <div className="mt-12 rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-10 sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 text-3xl">
            🚀
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-white sm:text-2xl">
            {productsSection.comingSoonTitle}
          </h3>
          <p className="mt-4 text-zinc-400">{productsSection.comingSoonMessage}</p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            {productsSection.notifyCta}
          </a>
        </div>
      </div>
    </section>
  );
}
