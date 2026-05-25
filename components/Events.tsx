import Image from "next/image";

const events = [
  {
    name: "Lorem ipsum dolor",
    date: "Sit amet · 8:00 AM",
    type: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    image: "/images/workspaces/hot-desk.jpg",
  },
  {
    name: "Consectetur adipiscing",
    date: "Elit sed · 12:00 PM",
    type: "Dolor sit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    image: "/images/workspaces/dedicated-desk.jpg",
  },
  {
    name: "Eiusmod tempor incididunt",
    date: "Ut labore · 6:00 PM",
    type: "Magna aliqua",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    image: "/images/workspaces/private-office.jpg",
  },
  {
    name: "Pariatur excepteur sint",
    date: "Occaecat cupidatat · 5:30 PM",
    type: "Non proident",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    image: "/images/workspaces/meeting-room.jpg",
  },
  {
    name: "Sunt in culpa qui",
    date: "Officia deserunt · 9:00 AM",
    type: "Mollit anim",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "/images/hero.jpg",
  },
  {
    name: "Natus error sit",
    date: "Voluptatem · 6:00 PM",
    type: "Accusantium",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    image: "/images/mission.png",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-cream px-6 py-16 lg:px-10 lg:py-24 xl:px-12">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
          join us for an{" "}
          <span className="bg-primary px-1.5 py-0.5 text-cream">event</span>
        </h2>

        <div className="relative mt-12 -mx-6 overflow-hidden lg:mx-0 lg:mt-14">
          <div className="events-scroll-mask overflow-x-auto px-6 pb-2 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            <div className="flex w-max gap-5">
              {events.map((event) => (
                <article
                  key={event.name}
                  className="flex w-72 shrink-0 snap-start flex-col overflow-hidden border border-dark/10 bg-white sm:w-80"
                >
                  <div className="relative h-44 w-full sm:h-48">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <p className="font-display text-xs font-medium uppercase tracking-wide text-primary">
                        {event.type}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold text-dark">
                        {event.name}
                      </h3>
                      <p className="font-body mt-1 text-sm text-dark/60">{event.date}</p>
                      <p className="font-body mt-3 text-[15px] leading-relaxed text-dark/70">
                        {event.description}
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
        </div>
      </div>
    </section>
  );
}
