import Image from "next/image";

const PLACEHOLDER_IMAGE = "/images/placeholder.png";

const workspaces = [
  {
    title: "Basic Membership",
    price: "$100/month",
    description:
      "Our base membership that allows all access to FUEL Coworking, use of all hot desks, and all member only events.",
  },
  {
    title: "Hot Desk",
    price: "$200/month",
    description:
      "All benefits of the basic membership with an additional 5 free hours for all reservable resources.",
  },
  {
    title: "Permanent Desk",
    price: "$400/month",
    description:
      "Our premier membership. Want to have a dedicated desk? Make it yours! This is your space to decorate and bring supplies as you see fit. Tailored towards those members who want their desk to feel like home.",
  },
  {
    title: "Excepteur sint occaecat",
    price: "Cupidatat non proident",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                  src={PLACEHOLDER_IMAGE}
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
