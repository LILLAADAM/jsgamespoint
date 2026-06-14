"use client";

import { FormEvent, useState } from "react";
import { contactSection } from "@data/index";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {contactSection.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{contactSection.subtitle}</p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          {submitted ? (
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 p-8 text-center">
              <p className="text-lg font-medium text-blue-300">
                {contactSection.form.success}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                    {contactSection.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={contactSection.form.namePlaceholder}
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                    {contactSection.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={contactSection.form.emailPlaceholder}
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300">
                  {contactSection.form.subjectLabel}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={contactSection.form.subjectPlaceholder}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
                  {contactSection.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={contactSection.form.messagePlaceholder}
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-black px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 sm:w-auto sm:px-8"
              >
                {contactSection.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
