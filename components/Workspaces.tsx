import Image from "next/image";

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
  return (
    <section id="workspaces" className="bg-primary px-6 py-24 md:px-8">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
          memberships_ for everyone
        </h2>
        <p className="font-body mt-4 max-w-xl text-cream/90">
          Not just a desk — a launchpad. Choose the tier that fits how you
          collaborate, innovate, and grow.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {workspaces.map((space) => (
            <article
              key={space.title}
              className="flex overflow-hidden rounded-2xl bg-cream"
            >
              <div className="relative w-28 shrink-0 self-stretch sm:w-36">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 112px, 144px"
                />
              </div>
              <div className="flex flex-col justify-center px-5 py-6">
                <p className="font-display text-sm font-medium text-primary">
                  {space.price}
                </p>
                <h3 className="font-display text-xl font-bold text-dark">
                  {space.title}
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-dark/70">
                  {space.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
