import { services, servicesSection, site } from "@data/index";
import { FeatureIcon } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{servicesSection.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black transition-all hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-6`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur">
                  <FeatureIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-1 text-sm text-blue-100/80">{service.subtitle}</p>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-6 text-zinc-400">{service.description}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-green-500/30 bg-green-500/10 py-2.5 text-center text-sm font-semibold text-green-400 transition-all hover:bg-green-600 hover:text-white"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 rounded-lg border border-blue-500/30 bg-blue-500/10 py-2.5 text-center text-sm font-semibold text-blue-400 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
