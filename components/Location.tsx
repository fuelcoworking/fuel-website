// 47°39'32.4"N 117°25'27.0"W — FUEL Coworking, Spokane
const STREET_VIEW_LAT = 47 + 39 / 60 + 32.4 / 3600;
const STREET_VIEW_LNG = -(117 + 25 / 60 + 27 / 3600);
const STREET_VIEW_HEADING = 210;

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${STREET_VIEW_LAT},${STREET_VIEW_LNG}`;

function getStreetViewEmbedUrl() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;

  if (key) {
    return `https://www.google.com/maps/embed/v1/streetview?key=${key}&location=${STREET_VIEW_LAT},${STREET_VIEW_LNG}&heading=${STREET_VIEW_HEADING}&pitch=0&fov=80`;
  }

  // Interactive Street View embed (no API key required)
  return `https://maps.google.com/maps?layer=c&cbll=${STREET_VIEW_LAT},${STREET_VIEW_LNG}&cbp=11,${STREET_VIEW_HEADING},0,0,0&output=svembed`;
}

const details = [
  {
    label: "Address",
    value: "809 W Main Ave, Suite 212\nSpokane, WA 99201",
  },
  {
    label: "Hours",
    value: "Monday – Friday · 8:00 AM – 6:00 PM\nSaturday · 9:00 AM – 2:00 PM",
  },
  {
    label: "Parking",
    value: "Street and garage parking nearby in downtown Spokane.",
  },
];

export default function Location() {
  const streetViewSrc = getStreetViewEmbedUrl();

  return (
    <section id="location" className="bg-cream px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
      <div className="mx-auto max-w-site">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              find us in spokane
            </h2>
            <p className="font-body mt-5 max-w-lg text-[15px] leading-relaxed text-dark md:text-base">
              FUEL sits in the heart of downtown — walkable cafes, riverfront trails,
              and a growing community of makers and founders right outside the door.
            </p>

            <dl className="mt-8 space-y-5">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-xs font-medium uppercase tracking-wide text-primary">
                    {item.label}
                  </dt>
                  <dd className="font-body mt-1 whitespace-pre-line text-[15px] leading-relaxed text-dark md:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-[15px] font-bold text-cream transition-opacity hover:opacity-90"
            >
              Get directions
            </a>
          </div>

          <div className="flex w-full flex-col lg:sticky lg:top-20">
            <div className="relative min-h-[400px] overflow-hidden border border-dark/10 sm:min-h-[480px] lg:min-h-[560px] xl:min-h-[640px]">
              <iframe
                title="Street View of FUEL Coworking at 809 W Main Ave, Spokane"
                src={streetViewSrc}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="font-body mt-3 text-xs text-dark/55">
              Drag to pan · Use controls to explore the street view
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
