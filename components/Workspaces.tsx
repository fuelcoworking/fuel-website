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
    <section id="workspaces" className="bg-primary px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
          options for everyone
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-8">
          {workspaces.map((space) => (
            <article
              key={space.title}
              className="grid min-h-[200px] grid-cols-1 overflow-hidden bg-white sm:min-h-[180px] sm:grid-cols-[9fr_11fr] lg:min-h-[200px]"
            >
              <div className="relative min-h-[160px] sm:min-h-0">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 22vw"
                />
              </div>

              <div className="flex flex-col justify-between bg-white p-5 lg:p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-dark lg:text-2xl">
                    {space.title}
                  </h3>
                  <p className="font-display mt-1 text-sm font-medium text-primary">
                    {space.price}
                  </p>
                  <p className="font-body mt-3 text-[15px] font-bold leading-relaxed text-dark/70">
                    {space.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="group font-body mt-5 inline-flex items-center gap-1 text-[15px] text-dark transition-opacity hover:opacity-70"
                >
                  Learn more{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
