"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const eventTypes = [
  "workshop",
  "meetup",
  "founder circle",
  "collab session",
  "community night",
];

const events = [
  {
    name: "Founder Breakfast",
    date: "Every Tuesday · 8:00 AM",
    type: "Collaborate",
  },
  {
    name: "Coworking 101",
    date: "Mar 12, 2026 · 12:00 PM",
    type: "Innovate",
  },
  {
    name: "Demo Night",
    date: "Mar 20, 2026 · 6:00 PM",
    type: "Grow",
  },
  {
    name: "Spokane Creators Meetup",
    date: "Apr 3, 2026 · 5:30 PM",
    type: "commUNITY",
  },
  {
    name: "Pitch & Coffee",
    date: "Apr 18, 2026 · 9:00 AM",
    type: "Collaborate",
  },
  {
    name: "Member Social",
    date: "May 1, 2026 · 6:00 PM",
    type: "commUNITY",
  },
];

export default function Events() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: eventTypes,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="events" className="bg-cream px-6 py-10 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-4xl font-bold text-dark md:text-5xl">
          join us for a{" "}
          <span ref={typedRef} className="text-primary" />
        </h2>

        <div className="mt-8 -mx-6 overflow-x-auto px-6 pb-2 snap-x snap-mandatory scroll-smooth">
          <div className="flex w-max gap-4">
            {events.map((event) => (
              <article
                key={event.name}
                className="w-72 shrink-0 snap-start border border-dark/10 bg-white p-5"
              >
                <p className="font-display text-xs font-medium uppercase tracking-wide text-primary">
                  {event.type}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-dark">
                  {event.name}
                </h3>
                <p className="font-body mt-2 text-sm text-dark/60">{event.date}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
