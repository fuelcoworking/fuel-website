"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import {
  submitContact,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { success: false, error: null };

const interestOptions = ["Hot desk", "Private office", "Free day pass"];

const inlineInputClass =
  "font-body border-0 border-b border-dark/20 bg-transparent px-0 py-0.5 text-[15px] text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-primary md:text-base";

const formParagraphClass =
  "font-body text-[15px] leading-[1.65] text-dark md:text-base";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="font-display mt-2 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-normal text-cream transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Submit"}
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
    <section id="contact" className="bg-cream px-6 py-24 lg:px-10 lg:py-32 xl:px-12">
      <div className="mx-auto max-w-site">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="font-display text-center text-4xl font-bold text-dark md:text-5xl lg:text-[3.25rem] lg:leading-tight">
            Try FUEL today
            <span className="text-primary">.</span>
          </h2>

          {state.success ? (
            <p
              role="status"
              className="font-body mx-auto mt-8 max-w-lg text-center text-[15px] leading-relaxed text-dark/80 md:text-base"
            >
              Thanks for reaching out — we&apos;ll be in touch soon. Your next idea
              takes off from here.
            </p>
          ) : (
            <form action={handleSubmit} className="mt-6 lg:mt-8">
              {(state.error || interestError) && (
                <p
                  role="alert"
                  className="font-body mx-auto mb-5 max-w-lg rounded-lg bg-primary/10 px-4 py-3 text-center text-sm text-dark"
                >
                  {interestError ?? state.error}
                </p>
              )}

              <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
                <div
                  className={`flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 text-center ${formParagraphClass}`}
                >
                  <span>My name is</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="first & last name"
                    className={`${inlineInputClass} w-[10.5rem] sm:w-[12.5rem]`}
                  />
                  <span>from</span>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="company name"
                    className={`${inlineInputClass} w-[8.5rem] sm:w-[10.5rem]`}
                  />
                  <span>.</span>
                </div>

                <div className="flex w-full flex-col items-center gap-3">
                  <p className={`text-center ${formParagraphClass}`}>
                    I want to join FUEL for{" "}
                    <span className="text-dark/55">(pick at least one)</span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {interestOptions.map((option) => {
                      const selected = interests.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleInterest(option)}
                          className={`font-body rounded-md border px-3 py-1.5 text-sm transition-colors ${
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

                <div
                  className={`flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 text-center ${formParagraphClass}`}
                >
                  <span>You can reach me at</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email address"
                    className={`${inlineInputClass} w-[12rem] sm:w-[16rem]`}
                  />
                  <span>.</span>
                </div>

                <SubmitButton />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
