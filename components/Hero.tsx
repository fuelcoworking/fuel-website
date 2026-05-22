"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["workspace", "office", "studio", "community", "hub"],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2200,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative h-[62vh] min-h-[480px]">
      <Image
        src="/images/hero.jpg"
        alt="Fuel coworking space in Spokane"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 pt-14">
        <h1 className="font-display text-6xl font-normal leading-tight text-white lg:text-7xl">
          <span>
            <span className="text-primary">your </span>
            <span ref={typedRef} />
            _
          </span>
          <br />
          in spokane.
        </h1>

        <a
          href="#contact"
          className="font-display text-sm font-normal lowercase text-primary transition-opacity hover:opacity-75"
        >
          try a free day
        </a>
      </div>
    </section>
  );
}
