export default function Intro() {
  return (
    <section className="bg-white px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-10 md:grid-cols-5 md:gap-12 lg:gap-16">
        <p className="font-display text-[1.625rem] font-normal leading-snug text-neutral-900 md:col-span-2 lg:text-[1.875rem] lg:leading-[1.25]">
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
