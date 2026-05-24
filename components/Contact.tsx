"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import {
  submitContact,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { success: false, error: null };

const interestOptions = [
  "Hot desk",
  "Dedicated desk",
  "Private office",
  "Free day pass",
  "Events & community",
];

const inlineInputClass =
  "font-body border-0 border-b border-dark/20 bg-transparent px-0 py-1 text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-primary";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="font-display mt-12 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-[15px] font-normal text-cream transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send my request"}
      {!pending && <span aria-hidden>→</span>}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitContact, initialState);
  const [interests, setInterests] = useState<string[]>([]);
  const [interestError, setInterestError] = useState<string | null>(null);

  const toggleInterest = (option: string) => {
    setInterests((prev) => {
      const next = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];
      if (next.length > 0) setInterestError(null);
      return next;
    });
  };

  const handleSubmit = (formData: FormData) => {
    if (interests.length === 0) {
      setInterestError("Pick at least one option above.");
      return;
    }
    setInterestError(null);
    formData.set("interests", interests.join(", "));
    formAction(formData);
  };

  return (
    <section id="contact" className="bg-cream px-6 py-16 lg:px-10 lg:py-24 xl:px-12">
      <div className="mx-auto flex max-w-site justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-[3.25rem] lg:leading-tight">
            Let&apos;s fuel your next move
            <span className="text-primary">.</span>
          </h2>

          {state.success ? (
            <p
              role="status"
              className="font-body mt-10 text-xl leading-relaxed text-dark/80"
            >
              Thanks for reaching out — we&apos;ll be in touch soon. Your next idea
              takes off from here.
            </p>
          ) : (
            <form action={handleSubmit} className="mt-10 lg:mt-12">
              {(state.error || interestError) && (
                <p
                  role="alert"
                  className="font-body mb-8 rounded-lg bg-primary/10 px-4 py-3 text-sm text-dark"
                >
                  {interestError ?? state.error}
                </p>
              )}

              <div className="space-y-10 lg:space-y-12">
                <p className="font-body text-xl leading-[1.75] text-dark md:text-[1.65rem] md:leading-[1.8]">
                  My name is{" "}
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="first & last name"
                    className={`${inlineInputClass} inline-block min-w-[14rem] w-[42%] max-w-md sm:min-w-[18rem] sm:w-[22rem] lg:min-w-[22rem] lg:w-[26rem]`}
                  />{" "}
                  and I&apos;m building with{" "}
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="company or solo"
                    className={`${inlineInputClass} inline-block min-w-[14rem] w-[42%] max-w-md sm:min-w-[18rem] sm:w-[22rem] lg:min-w-[22rem] lg:w-[26rem]`}
                  />
                  .
                </p>

                <div>
                  <p className="font-body text-xl leading-[1.75] text-dark md:text-[1.65rem] md:leading-[1.8]">
                    I want to join FUEL for{" "}
                    <span className="text-dark/55">(pick at least one)</span>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {interestOptions.map((option) => {
                      const selected = interests.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleInterest(option)}
                          className={`font-body rounded-md border px-5 py-2.5 text-[15px] transition-colors ${
                            selected
                              ? "border-primary bg-primary/10 text-dark"
                              : "border-dark/15 bg-white/80 text-dark hover:border-dark/30"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="font-body text-xl leading-[1.75] text-dark md:text-[1.65rem] md:leading-[1.8]">
                  You can reach me at{" "}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email address"
                    className={`${inlineInputClass} inline-block min-w-[16rem] w-[min(100%,36rem)] sm:min-w-[24rem] sm:w-[32rem] lg:min-w-[28rem] lg:w-[36rem]`}
                  />
                  .
                </p>

                <p className="font-body text-xl leading-[1.75] text-dark md:text-[1.65rem] md:leading-[1.8]">
                  Or call me at{" "}
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="phone number (optional)"
                    className={`${inlineInputClass} inline-block min-w-[16rem] w-[min(100%,36rem)] sm:min-w-[24rem] sm:w-[32rem] lg:min-w-[28rem] lg:w-[36rem]`}
                  />
                  .
                </p>

                <p className="font-body text-xl leading-[1.75] text-dark md:text-[1.65rem] md:leading-[1.8]">
                  Here&apos;s what I&apos;m working on:{" "}
                  <input
                    id="message"
                    name="message"
                    type="text"
                    placeholder="your project, team, or goals"
                    className={`${inlineInputClass} inline-block min-w-[16rem] w-[min(100%,36rem)] sm:min-w-[24rem] sm:w-[32rem] lg:min-w-[28rem] lg:w-[36rem]`}
                  />
                  .
                </p>
              </div>

              <SubmitButton />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
