import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Merged into /anxiety/.
// Cloudflare sends the 301 (see cloudflare-redirects.csv); this stub is the noindex
// fallback where that redirect is not deployed.
const destination = "/anxiety/";

export const metadata: Metadata = {
  title: "Anxiety treatment in Nepal — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Anxiety treatment in Kathmandu" />;
}
