import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

// Short URL that points at the testimonials page. noindex so it does not compete with it.
const destination = "/patient-testimonials/";

export const metadata: Metadata = {
  title: "Patient reviews — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function ReviewsRedirect() {
  return <RedirectNotice to={destination} label="Patient testimonials" />;
}
