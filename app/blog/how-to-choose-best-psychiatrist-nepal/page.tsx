import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Merged into /best-psychiatrist-nepal/. Cloudflare sends the 301 (see cloudflare-redirects.csv); this stub is
// the noindex fallback where that redirect is not deployed.
const destination = "/best-psychiatrist-nepal/";

export const metadata: Metadata = {
  title: "How to choose a psychiatrist — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="How to choose the best psychiatrist in Kathmandu" />;
}
