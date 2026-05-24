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
      showCursor: true,
      cursorChar: "_",
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative h-[68vh] min-h-[480px] md:h-[72vh] md:min-h-[560px] lg:min-h-[620px]">
      <Image
        src="/images/hero.jpg"
        alt="FUEL coworking — white letters on a wooden table"
        fill
        priority
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="absolute inset-0 z-10 mx-auto flex h-full max-w-site flex-col justify-between px-6 pb-8 pt-20 lg:px-10 lg:pb-10 xl:px-12">
        <h1 className="max-w-2xl font-display text-[clamp(2.25rem,6.5vw,5.25rem)] font-normal lowercase leading-[1.12] tracking-normal text-white">
          <span className="block">
            Your{" "}
            <span ref={typedRef} className="text-primary [&_.typed-cursor]:text-white" />
          </span>
          <span className="block">in spokane</span>
        </h1>

        <a
          href="#contact"
          className="font-body w-fit rounded-full bg-white px-6 py-3 text-[15px] font-normal text-dark transition-opacity hover:opacity-90"
        >
          Try a free day
        </a>
      </div>
    </section>
  );
}
