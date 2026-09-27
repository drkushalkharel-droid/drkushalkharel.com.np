import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Merged into /blog/sleep-problems-and-mental-health/. Cloudflare sends the 301 (see cloudflare-redirects.csv); this stub is
// the noindex fallback where that redirect is not deployed.
const destination = "/blog/sleep-problems-and-mental-health/";

export const metadata: Metadata = {
  title: "Sleep and mental health — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Sleep problems and mental health" />;
}
