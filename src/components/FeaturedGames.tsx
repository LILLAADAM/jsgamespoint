import { featuredGames, gamesSection } from "@data/index";
import { StarIcon } from "./Icons";

export default function FeaturedGames() {
  return (
    <section id="games" className="bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {gamesSection.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{gamesSection.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGames.map((game) => (
            <article
              key={game.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black transition-all hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className={`relative h-44 bg-gradient-to-br ${game.gradient} p-6`}>
                {game.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                    {game.badge}
                  </span>
                )}
                <div className="flex h-full items-end">
                  <span className="font-display text-3xl font-bold text-white/90">
                    {game.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-white">{game.title}</h3>
                    <p className="mt-0.5 text-sm text-zinc-500">{game.genre}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-amber-400">
                    <StarIcon className="h-4 w-4 fill-amber-400" />
                    <span>{game.rating}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-lg font-bold text-blue-400">{game.price}</span>
                  {game.originalPrice && (
                    <span className="text-sm text-zinc-500 line-through">
                      {game.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-lg border border-blue-500/30 bg-blue-500/10 py-2.5 text-sm font-semibold text-blue-400 transition-all hover:bg-blue-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#games"
            className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-blue-500/50 hover:text-blue-400"
          >
            {gamesSection.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
