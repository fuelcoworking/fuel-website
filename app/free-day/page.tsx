import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeDayForm from "@/components/FreeDayForm";

export const metadata: Metadata = {
  title: "Try a Free Day | FUEL Coworking",
  description:
    "Spend a full day working from FUEL on us. Get 24 hours of access to our downtown Spokane coworking space — no commitment, no card required.",
};

const perks = [
  "24 hours of full access to the space",
  "All hot desks and common areas",
  "Fast Wi-Fi, coffee, and meeting nooks",
  "A feel for the community before you join",
];

export default function FreeDayPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <section className="px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-28 xl:px-12">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-wide text-primary">
              Free day pass
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              Try FUEL for a day, on us.
            </h1>
            <p className="font-body mt-6 max-w-xl text-[15px] leading-relaxed text-dark md:text-base">
              The best way to know if FUEL is your kind of place is to work from
              it. Tell us a little about yourself and pick a day — we&apos;ll set
              you up with a full 24 hours of access to the space. No card, no
              commitment.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 text-primary"
                  >
                    ✓
                  </span>
                  <span className="font-body text-[15px] leading-relaxed text-dark/80 md:text-base">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-body mt-8 max-w-xl text-sm leading-relaxed text-dark/55">
              Once you arrive, we&apos;ll activate your 24-hour access at the
              front desk so you can come and go for a full day.
            </p>
          </div>

          <div className="lg:pt-2">
            <FreeDayForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
