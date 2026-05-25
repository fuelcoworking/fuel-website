export default function Intro() {
  return (
    <section className="bg-cream px-6 py-14 lg:px-10 lg:py-20 xl:px-12">
      <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-x-12 lg:gap-x-16">
        <h2 className="font-display text-[1.75rem] font-bold leading-[1.15] text-dark md:col-span-5 lg:text-[2rem]">
          Welcome to FUEL, your local home for entrepreneurs, creatives, and
          community builders.
        </h2>

        <div className="flex flex-col gap-y-4 md:col-span-7">
          <p className="font-body text-[15px] leading-relaxed text-dark">
            From freelancers and flexible workers to startup teams, our coworking
            studios, private offices, and memberships are designed to support your
            productivity and elevate your workday.
          </p>
          <p className="font-body text-[15px] leading-relaxed text-dark">
            Our meeting and event spaces foster collaboration, creativity, and
            growth. FUEL is where business and community thrive, and where the
            neighbourhood comes together to make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
}
