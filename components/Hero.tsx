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
    <section className="relative h-[58vh] min-h-[420px] md:h-[62vh] md:min-h-[480px]">
      <Image
        src="/images/hero.jpg"
        alt="FUEL coworking — white letters on a wooden table"
        fill
        priority
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <div className="absolute inset-0 z-10 mx-auto max-w-site px-8 pt-12 md:px-12 md:pt-14 lg:px-16">
        <h1 className="max-w-2xl font-display text-[2.75rem] font-normal lowercase leading-[1.1] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          <span className="block">
            <span className="text-accent">your </span>
            <span ref={typedRef} />_
          </span>
          <span className="block">in spokane.</span>
        </h1>
      </div>
    </section>
  );
}
