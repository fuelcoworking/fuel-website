"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initialState: WaitlistState = { success: false, error: null };

const fieldClass =
  "font-body mt-2 w-full rounded-md border border-dark/15 bg-white px-3.5 py-2.5 text-[15px] text-dark outline-none transition-colors placeholder:text-dark/35 focus:border-primary md:text-base";

const labelClass =
  "font-display text-xs font-medium uppercase tracking-wide text-dark/70";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="font-display mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-[15px] font-bold text-cream transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Join the waitlist"}
      {!pending && <span aria-hidden>→</span>}
    </button>
  );
}

export default function WaitlistForm() {
  const [state, formAction] = useFormState(submitWaitlist, initialState);

  if (state.success) {
    return (
      <div className="rounded-xl border border-primary/20 bg-white p-6 lg:p-8">
        <p className="font-display text-xl font-bold text-dark">
          You&apos;re on the waitlist.
        </p>
        <p className="font-body mt-3 text-[15px] leading-relaxed text-dark/75 md:text-base">
          Thanks — we&apos;ve added you to the private office waitlist. We&apos;ll
          reach out as soon as a space opens up.
        </p>
      </div>
    );
  }

  if (state.mailto) {
    return (
      <div className="rounded-xl border border-primary/20 bg-white p-6 lg:p-8">
        <p className="font-display text-xl font-bold text-dark">One last step</p>
        <p className="font-body mt-3 text-[15px] leading-relaxed text-dark/75 md:text-base">
          Your details are ready to go. Click below to send them to our team and
          we&apos;ll add you to the private office waitlist.
        </p>
        <a
          href={state.mailto}
          className="font-display mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-[15px] font-bold text-cream transition-opacity hover:opacity-90"
        >
          Send my request <span aria-hidden>→</span>
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-xl border border-dark/10 bg-white p-6 lg:p-8">
      {state.error && (
        <p
          role="alert"
          className="font-body mb-5 rounded-lg bg-primary/10 px-4 py-3 text-sm text-dark"
        >
          {state.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="First & last name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className={labelClass}>
            Company / team
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Optional"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="notes" className={labelClass}>
          Anything we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Team size, timeline, what you're looking for…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <SubmitButton />
    </form>
  );
}
