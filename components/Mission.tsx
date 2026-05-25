"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const nextBigWords = ["idea", "business", "venture", "project", "breakthrough"];

export default function Mission() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: nextBigWords,
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
    <section id="mission" className="relative min-h-[520px] lg:min-h-[580px]">
      <Image
        src="/images/mission.png"
        alt="FUEL coworking community collaborating"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-dark/60" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-site flex-col items-center justify-center px-6 py-16 text-center lg:min-h-[580px] lg:px-10 lg:py-20 xl:px-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
            fuel your next big{" "}
            <span ref={typedRef} className="text-amber [&_.typed-cursor]:text-cream" />
          </h2>
          <p className="font-display mt-4 text-xl font-bold text-cream md:text-2xl">
            Work, community, and connection in Spokane.
          </p>
          <p className="font-body mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
            FUEL is a community-first coworking space — a launchpad for founders,
            freelancers, and forward-thinkers ready to ignite momentum and take their
            next idea off the ground.
          </p>
          <a
            href="#contact"
            className="font-display mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-dark transition-opacity hover:opacity-90"
          >
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
}
