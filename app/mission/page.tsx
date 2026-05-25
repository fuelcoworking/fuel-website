import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

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

export default function MissionPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <section className="px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-28 xl:px-12">
        <div className="mx-auto max-w-site">
          <p className="font-display text-sm font-medium uppercase tracking-wide text-primary">
            About FUEL
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
            Our mission
          </h1>
          <p className="font-display mt-6 max-w-2xl text-xl font-bold text-dark md:text-2xl">
            Big ideas don&apos;t happen in isolation.
          </p>
          <div className="mt-8 max-w-2xl space-y-5">
            <p className="font-body text-[15px] leading-relaxed text-dark md:text-base">
              FUEL exists to create a community-first coworking space in Spokane
              where entrepreneurs, freelancers, and forward-thinkers can do their
              best work — together. We believe stronger local connections lead to
              bolder ideas, healthier neighbourhoods, and greater opportunity for
              everyone.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-dark md:text-base">
              Everything we build — from flexible memberships to meeting rooms and
              events — is designed to help people collaborate, innovate, and grow
              in a place that feels like home.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title}>
                <h2 className="font-display text-lg font-bold text-dark">
                  {pillar.title}
                </h2>
                <p className="font-body mt-2 text-[15px] leading-relaxed text-dark/75">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/#contact"
            className="font-display mt-12 inline-block rounded-full bg-primary px-8 py-3.5 text-[15px] font-bold text-cream transition-opacity hover:opacity-90"
          >
            Join the community
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
