"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const audienceTypes = [
  "founders",
  "freelancers",
  "creators",
  "teams",
  "builders",
];

const workspaces = [
  {
    title: "Basic",
    price: "$100/mo",
    description:
      "Hotdesk access without reservation. Your entry point to the FUEL community.",
    image: "/images/workspaces/hot-desk.jpg",
  },
  {
    title: "Hot Desk",
    price: "$200/mo",
    description:
      "Pick any open desk daily. Fast internet, conference room credits, and unlimited coffee.",
    image: "/images/workspaces/dedicated-desk.jpg",
  },
  {
    title: "Permanent Desk",
    price: "$400/mo",
    description:
      "Your own dedicated desk, always. Full amenities plus full community access.",
    image: "/images/workspaces/private-office.jpg",
  },
  {
    title: "Private Office",
    price: "$500/mo",
    description:
      "Private office on floor 1 or 2. Best for teams or anyone who needs focused space.",
    image: "/images/workspaces/meeting-room.jpg",
  },
];

export default function Workspaces() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: audienceTypes,
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2200,
      loop: true,
      showCursor: true,
      cursorChar: "_",
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="workspaces" className="bg-primary px-6 py-10 lg:px-10 lg:py-14 xl:px-12">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
          memberships for{" "}
          <span ref={typedRef} className="text-cream [&_.typed-cursor]:text-cream" />
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {workspaces.map((space) => (
            <article
              key={space.title}
              className="grid min-h-[160px] grid-cols-1 overflow-hidden bg-white sm:min-h-[170px] sm:grid-cols-2 lg:min-h-[180px]"
            >
              <div className="relative min-h-[120px] sm:min-h-0">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-between bg-white p-4 lg:p-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-dark lg:text-xl">
                    {space.title}
                  </h3>
                  <p className="font-display mt-0.5 text-sm font-medium text-primary">
                    {space.price}
                  </p>
                  <p className="font-body mt-2 text-[15px] leading-snug text-dark/70">
                    {space.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="font-body mt-3 inline-flex items-center gap-1 text-[15px] text-dark transition-opacity hover:opacity-70"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
