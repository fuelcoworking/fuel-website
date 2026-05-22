import Image from "next/image";

const pillars = [
  {
    title: "Collaborate",
    description:
      "Work side by side with founders, creatives, and business leaders. Collaboration is the spark that drives everything forward.",
  },
  {
    title: "Innovate",
    description:
      "Turn bold ideas into reality with resources, mentorship, and a community that thrives on experimentation — action over inspiration.",
  },
  {
    title: "Grow",
    description:
      "Scale your business and yourself. FUEL gives you the runway, capital connections, and confidence to level up.",
  },
  {
    title: "commUNITY",
    description:
      "Belonging isn't an amenity — it's core to who we are. UNITY is built into everything we do.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative min-h-[500px]">
      <Image
        src="/images/mission.png"
        alt="FUEL coworking community collaborating"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-dark/60" aria-hidden />

      <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 py-24">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
            fuel your next big idea_
          </h2>
          <p className="font-display mt-4 text-lg font-normal text-amber">
            Big ideas don&apos;t happen in isolation.
          </p>
          <p className="font-body mt-6 text-lg leading-relaxed text-cream/90">
            FUEL is a community-first coworking space in Spokane — a launchpad for
            founders, freelancers, and forward-thinkers ready to ignite momentum and
            take their next idea off the ground.
          </p>
        </div>

        <div className="mt-14 grid max-w-site gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="text-center">
              <h3 className="font-display text-lg font-bold text-cream">
                {pillar.title}
              </h3>
              <p className="font-body mt-2 text-sm leading-relaxed text-cream/80">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
