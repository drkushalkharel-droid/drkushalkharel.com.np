import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Merged into /depression-treatment-kathmandu/.
// Cloudflare sends the 301 (see cloudflare-redirects.csv); this stub is the noindex
// fallback where that redirect is not deployed.
const destination = "/depression-treatment-kathmandu/";

export const metadata: Metadata = {
  title: "Depression treatment in Nepal — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Depression treatment in Kathmandu" />;
}
