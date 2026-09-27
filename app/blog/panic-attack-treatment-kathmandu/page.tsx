import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Merged into /panic-attack-treatment-kathmandu/. Cloudflare sends the 301 (see cloudflare-redirects.csv); this stub is
// the noindex fallback where that redirect is not deployed.
const destination = "/panic-attack-treatment-kathmandu/";

export const metadata: Metadata = {
  title: "Panic attacks: symptoms and treatment — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Panic attack treatment in Kathmandu" />;
}
