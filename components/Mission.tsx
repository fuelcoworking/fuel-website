import Image from "next/image";

export default function Mission() {
  return (
    <section id="mission" className="relative min-h-[500px]">
      <Image
        src="/images/mission.png"
        alt="Fuel coworking community"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 flex min-h-[500px] items-center justify-center px-6 py-24">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            our mission_
          </h2>
          <p className="font-body mt-6 text-lg leading-relaxed text-white/90">
            We believe great work happens when talented people share space, ideas,
            and momentum. FUEL exists to remove friction from your day so you can
            focus on what matters — building something meaningful alongside a
            community that shows up for each other.
          </p>
        </div>
      </div>
    </section>
  );
}
