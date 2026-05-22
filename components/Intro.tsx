export default function Intro() {
  return (
    <section className="bg-cream px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-10 md:grid-cols-5 md:gap-12 lg:gap-16">
        <p className="font-display text-[1.625rem] font-normal leading-snug text-dark md:col-span-2 lg:text-[1.875rem] lg:leading-[1.25]">
          Welcome to FUEL — your launchpad for entrepreneurs, creatives, and
          forward-thinkers in Spokane.
        </p>

        <div className="flex flex-col gap-y-4 md:col-span-3">
          <p className="font-body text-[15px] leading-relaxed text-dark/70">
            Big ideas don&apos;t happen in isolation. From freelancers and startup
            teams to business leaders, our coworking studios, private offices, and
            memberships are built to fuel your productivity and level up your
            workday.
          </p>
          <p className="font-body text-[15px] leading-relaxed text-dark/70">
            Our meeting and event spaces ignite collaboration, innovation, and
            growth. FUEL is where commUNITY thrives — and where Spokane&apos;s builders
            come together to take their next idea off the ground.
          </p>
        </div>
      </div>
    </section>
  );
}
