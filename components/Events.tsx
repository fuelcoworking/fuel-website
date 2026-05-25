import Image from "next/image";

const events = [
  {
    name: "Founder Breakfast",
    date: "Every Tuesday · 8:00 AM",
    type: "Collaborate",
    description:
      "Start your week with founders and operators over coffee and conversation.",
    image: "/images/workspaces/hot-desk.jpg",
  },
  {
    name: "Coworking 101",
    date: "Mar 12, 2026 · 12:00 PM",
    type: "Innovate",
    description:
      "A guided intro to FUEL — tour the space, meet members, and find your fit.",
    image: "/images/workspaces/dedicated-desk.jpg",
  },
  {
    name: "Demo Night",
    date: "Mar 20, 2026 · 6:00 PM",
    type: "Grow",
    description:
      "Local builders share what they are shipping. Feedback, connections, and pizza.",
    image: "/images/workspaces/private-office.jpg",
  },
  {
    name: "Spokane Creators Meetup",
    date: "Apr 3, 2026 · 5:30 PM",
    type: "commUNITY",
    description:
      "Designers, writers, and makers connect for show-and-tell and collaboration.",
    image: "/images/workspaces/meeting-room.jpg",
  },
  {
    name: "Pitch & Coffee",
    date: "Apr 18, 2026 · 9:00 AM",
    type: "Collaborate",
    description:
      "Practice your pitch in a supportive room before investors and partners.",
    image: "/images/hero.jpg",
  },
  {
    name: "Member Social",
    date: "May 1, 2026 · 6:00 PM",
    type: "commUNITY",
    description:
      "An after-hours hang for members — no agenda, just community and good energy.",
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
