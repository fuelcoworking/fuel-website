"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["desk", "office", "community", "workspace"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative min-h-screen">
      <Image
        src="/images/hero.jpg"
        alt="Fuel coworking space in Spokane"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-dark/60" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-28 pt-24">
        <h1 className="font-display text-5xl font-bold leading-tight text-cream md:text-7xl lg:text-8xl">
          <span className="text-primary">your</span>{" "}
          <span ref={typedRef} className="text-cream" /> in spokane.
        </h1>
      </div>

      <a
        href="#contact"
        className="absolute bottom-8 left-6 z-10 rounded-full bg-primary px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-orange md:left-8"
      >
        Get in touch
      </a>
    </section>
  );
}
