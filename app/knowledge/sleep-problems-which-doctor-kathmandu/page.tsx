import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Merged into /sleep-problems-treatment-nepal/.
// Cloudflare sends the 301 (see cloudflare-redirects.csv); this stub is the noindex
// fallback where that redirect is not deployed.
const destination = "/sleep-problems-treatment-nepal/";

export const metadata: Metadata = {
  title: "Sleep problems: which doctor to see — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Sleep problems treatment in Nepal" />;
}
