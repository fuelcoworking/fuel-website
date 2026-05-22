export default function Intro() {
  return (
    <section className="bg-[#EDE9E3] px-8 py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-5">
        <p className="font-display text-2xl font-normal leading-snug text-neutral-900 md:col-span-2 lg:text-3xl">
          Welcome to FUEL, your local home for entrepreneurs, creatives, and
          community builders.
        </p>

        <div className="flex flex-col gap-y-4 md:col-span-3">
          <p className="font-body text-[15px] leading-relaxed text-neutral-600">
            From freelancers and flexible workers to startup teams, our coworking
            studios, private offices, and memberships are designed to support your
            productivity and elevate your workday.
          </p>
          <p className="font-body text-[15px] leading-relaxed text-neutral-600">
            Our meeting and event spaces foster collaboration, creativity, and
            growth. FUEL is where business and community thrive, and where the
            neighborhood comes together to make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
}
