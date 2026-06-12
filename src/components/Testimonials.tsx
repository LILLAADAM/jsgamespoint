import { testimonials, testimonialsSection } from "@data/index";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {testimonialsSection.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{testimonialsSection.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-8"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-base leading-7 text-zinc-300">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 text-sm font-semibold text-blue-400">
                &mdash; {item.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
