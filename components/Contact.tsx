"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  submitContact,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { success: false, error: null };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="font-display w-full rounded-full bg-primary py-3 font-medium text-cream transition-colors hover:bg-orange disabled:opacity-60"
    >
      {pending ? "Sending…" : "Claim your free day"}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <section id="contact" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl font-bold text-dark">Get in touch</h2>
        <p className="font-body mt-4 text-dark/70">
          Ready to see the space? Claim your free day and we&apos;ll be in touch.
        </p>

        {state.success ? (
          <p
            role="status"
            className="font-body mt-10 rounded-2xl border border-primary/30 bg-white px-6 py-8 text-lg text-dark"
          >
            Thanks for reaching out! We&apos;ll get back to you soon.
          </p>
        ) : (
          <form action={formAction} className="mt-10 space-y-4 text-left">
            {state.error && (
              <p role="alert" className="font-body rounded-lg bg-primary/10 px-4 py-3 text-sm text-dark">
                {state.error}
              </p>
            )}

            <div>
              <label htmlFor="name" className="font-display mb-1 block text-sm font-medium text-dark">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="font-body w-full rounded-lg border border-dark/20 bg-white px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-display mb-1 block text-sm font-medium text-dark">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="font-body w-full rounded-lg border border-dark/20 bg-white px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="font-display mb-1 block text-sm font-medium text-dark">
                Phone <span className="font-normal text-dark/50">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="font-body w-full rounded-lg border border-dark/20 bg-white px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-display mb-1 block text-sm font-medium text-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="font-body w-full rounded-lg border border-dark/20 bg-white px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <SubmitButton />
          </form>
        )}
      </div>
    </section>
  );
}
