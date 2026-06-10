import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const pillars = [
  {
    title: "Community first",
    description:
      "We measure success by the connections made here — the introductions, collaborations, and friendships that start over a shared coffee pot.",
  },
  {
    title: "Built for focus",
    description:
      "Thoughtfully designed desks, offices, and quiet corners so you can do your most productive work, then step out to recharge with the community.",
  },
  {
    title: "Proudly local",
    description:
      "FUEL is rooted in downtown Spokane. When our members grow, the neighborhood grows with them — and that's exactly the point.",
  },
  {
    title: "Room to grow",
    description:
      "From your first hot desk to a private office, FUEL flexes with you. Start small, scale up, and never outgrow your community.",
  },
];

export default function MissionPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <section className="px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-28 xl:px-12">
        <div className="mx-auto max-w-site">
          <p className="font-display text-sm font-medium uppercase tracking-wide text-primary">
            Why we built FUEL
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
            Our mission
          </h1>
          <p className="font-display mt-6 max-w-2xl text-xl font-bold text-dark md:text-2xl">
            To give Spokane&apos;s builders a place to do their best work —
            together.
          </p>
          <div className="mt-8 max-w-2xl space-y-5">
            <p className="font-body text-[15px] leading-relaxed text-dark md:text-base">
              FUEL started from a simple belief: the best ideas grow faster when
              people aren&apos;t working alone. So we built a coworking space in
              the heart of downtown Spokane where founders, freelancers, and
              creatives share a room, a coffee pot, and a sense of momentum.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-dark md:text-base">
              More than desks and Wi-Fi, FUEL is a community. We host events,
              make introductions, and create the everyday collisions that turn a
              side project into a business and a newcomer into a neighbor. When
              our members grow, downtown Spokane grows with them.
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
