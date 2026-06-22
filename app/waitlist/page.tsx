import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Private Office Waitlist | FUEL Coworking",
  description:
    "Join the waitlist for a private, lockable office at FUEL Coworking in downtown Spokane. We'll reach out as soon as a space opens up.",
};

const perks = [
  "A fully private, lockable office",
  "All the benefits of FUEL membership",
  "Your own space to make your own",
  "First in line when a space opens",
];

export default function WaitlistPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <section className="px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-28 xl:px-12">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-wide text-primary">
              Private office
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              Join the waitlist.
            </h1>
            <p className="font-body mt-6 max-w-xl text-[15px] leading-relaxed text-dark md:text-base">
              Our private offices are in high demand. Add your name to the
              waitlist and we&apos;ll reach out the moment a space opens up — no
              commitment, just first dibs.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-primary">
                    ✓
                  </span>
                  <span className="font-body text-[15px] leading-relaxed text-dark/80 md:text-base">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-2">
            <WaitlistForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
