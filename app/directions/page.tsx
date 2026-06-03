import LegalPage from "@/components/LegalPage";
import Link from "next/link";

export default function DirectionsPage() {
  return (
    <LegalPage title="Finding FUEL from the street">
      <p>
        Step-by-step directions for entering FUEL Coworking from the street will
        be added here soon — including building access, suite location, and
        what to look for when you arrive at 809 W Main Ave.
      </p>
      <p>
        In the meantime, use the map on our{" "}
        <Link href="/#location" className="text-primary underline-offset-4 hover:underline">
          location section
        </Link>{" "}
        or tap Get directions for turn-by-turn navigation to the building.
      </p>
    </LegalPage>
  );
}
