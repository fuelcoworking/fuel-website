import Image from "next/image";

const workspaces = [
  {
    title: "Hot Desk",
    description:
      "Drop in for a day or join monthly. Flexible access to open seating, fast Wi‑Fi, and shared amenities.",
    image: "/images/workspaces/hot-desk.jpg",
  },
  {
    title: "Dedicated Desk",
    description:
      "Your own desk in our open-plan area with storage, 24/7 access, and a consistent spot to call home.",
    image: "/images/workspaces/dedicated-desk.jpg",
  },
  {
    title: "Private Office",
    description:
      "Lockable offices for teams of 2–12. Customize the layout and make it yours without long-term overhead.",
    image: "/images/workspaces/private-office.jpg",
  },
  {
    title: "Meeting Room",
    description:
      "Bookable rooms for client calls, team syncs, and workshops — equipped with displays and whiteboards.",
    image: "/images/workspaces/meeting-room.jpg",
  },
];

export default function Workspaces() {
  return (
    <section id="workspaces" className="bg-orange px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
          workspaces_ for everyone
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {workspaces.map((space) => (
            <article
              key={space.title}
              className="flex overflow-hidden rounded-2xl bg-white"
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
                <h3 className="font-display text-xl font-bold text-dark">
                  {space.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/70">
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
