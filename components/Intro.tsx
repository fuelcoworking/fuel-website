export default function Intro() {
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 md:items-start">
        <h2 className="font-display text-4xl font-bold leading-tight text-dark md:text-5xl lg:text-6xl">
          FUEL is where Spokane comes to work, build, and belong.
        </h2>

        <div className="space-y-6 text-base leading-relaxed text-dark/80 md:text-lg">
          <p>
            We&apos;re a coworking space designed for freelancers, founders, and
            small teams who want more than a coffee shop and less overhead than a
            traditional lease. Hot desks, dedicated desks, private offices, and
            meeting rooms — all under one roof in the heart of the city.
          </p>
          <p>
            Our mission is simple: remove the friction from your workday so you can
            focus on what matters. At FUEL, you get reliable infrastructure, a
            welcoming community, and the momentum that comes from sharing space
            with people who are building something real.
          </p>
        </div>
      </div>
    </section>
  );
}
