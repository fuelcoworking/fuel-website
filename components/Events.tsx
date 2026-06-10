import { EVENTBRITE_URL } from "@/lib/site-links";
import { getUpcomingEvents, formatEventDate } from "@/lib/eventbrite";

export default async function Events() {
  const events = await getUpcomingEvents();

  return (
    <section
      id="events"
      className="bg-cream px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28 xl:px-12"
    >
      <div className="mx-auto max-w-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
            join us for an{" "}
            <span className="bg-primary px-1.5 py-0.5 text-cream">event</span>
          </h2>
          <a
            href={EVENTBRITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group font-body inline-flex items-center gap-1 text-[15px] text-dark transition-opacity hover:opacity-70"
          >
            See all events on Eventbrite{" "}
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {events.length === 0 ? (
          <div className="mt-10 border border-dark/10 bg-white p-8 text-center lg:mt-12 lg:p-12">
            <p className="font-display text-xl font-bold text-dark">
              More events are on the way.
            </p>
            <p className="font-body mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-dark/70">
              We&apos;re always hosting workshops, mixers, and member meetups.
              Follow along on Eventbrite to catch the next one.
            </p>
            <a
              href={EVENTBRITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-6 inline-block rounded-full bg-primary px-7 py-3 text-[15px] font-bold text-cream transition-opacity hover:opacity-90"
            >
              View our Eventbrite
            </a>
          </div>
        ) : (
          <div className="relative mt-12 -mx-6 overflow-hidden lg:-mx-10 lg:mt-14 xl:-mx-12">
            <div className="events-scroll-mask overflow-x-auto px-6 pb-2 scrollbar-hide snap-x snap-mandatory scroll-smooth lg:px-10 xl:px-12">
              <div className="flex w-max gap-5">
                {events.map((event) => (
                  <article
                    key={event.id}
                    className="flex w-72 shrink-0 snap-start flex-col overflow-hidden border border-dark/10 bg-white sm:w-80"
                  >
                    {event.imageUrl && (
                      <div className="relative h-44 w-full sm:h-48">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={event.imageUrl}
                          alt={event.name}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h3 className="font-display text-xl font-bold text-dark">
                          {event.name}
                        </h3>
                        <p className="font-body mt-1 text-sm text-dark/60">
                          {formatEventDate(event.start)}
                        </p>
                        {event.venue && (
                          <p className="font-body mt-1 text-sm text-dark/50">
                            {event.venue}
                          </p>
                        )}
                      </div>
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group font-body mt-5 inline-flex items-center gap-1 text-[15px] text-dark transition-opacity hover:opacity-70"
                      >
                        Get tickets{" "}
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
        )}
      </div>
    </section>
  );
}
