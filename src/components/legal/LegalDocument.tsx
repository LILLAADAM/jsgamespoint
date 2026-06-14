import type { LegalPageData } from "@data/policies/types";

type LegalDocumentProps = {
  data: LegalPageData;
};

export default function LegalDocument({ data }: LegalDocumentProps) {
  return (
    <article className="prose-legal">
      <header className="mb-10 border-b border-white/10 pb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {data.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-400">{data.description}</p>
        <p className="mt-3 text-sm text-zinc-500">
          Last Updated:{" "}
          <time dateTime={data.lastUpdated}>
            {new Date(data.lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
      </header>

      <div className="space-y-10">
        {data.sections.map((section, index) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <h2
              id={`${section.id}-heading`}
              className="font-display text-xl font-semibold text-white sm:text-2xl"
            >
              {index + 1}. {section.title}
            </h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-7 text-zinc-400">
                {paragraph}
              </p>
            ))}

            {section.list && (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-400">
                {section.list.map((item) => (
                  <li key={item.slice(0, 50)} className="leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.subsections?.map((sub) => (
              <div key={sub.title} className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-blue-400">{sub.title}</h3>
                {sub.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-sm leading-7 text-zinc-400">
                    {p}
                  </p>
                ))}
                {sub.list && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-zinc-400">
                    {sub.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
