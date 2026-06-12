import { ctaBanner, site } from "@data/index";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
          {ctaBanner.title}
        </h2>
        <p className="mt-4 text-lg text-blue-100">{ctaBanner.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl bg-white px-8 py-3.5 text-center text-sm font-semibold text-blue-700 shadow-lg transition-all hover:bg-blue-50 sm:w-auto"
          >
            {ctaBanner.primaryCta}
          </a>
          <a
            href="#contact"
            className="w-full rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 sm:w-auto"
          >
            {ctaBanner.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
