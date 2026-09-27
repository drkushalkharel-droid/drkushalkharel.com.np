import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

// Legacy URL. Cloudflare sends a 301 to /screening/ (see cloudflare-redirects.csv);
// this page is the fallback where that redirect is not deployed. It is noindex so the
// old URL does not compete with /screening/, and its canonical points at the target
// (it previously inherited the homepage as its canonical).
const destination = "/screening/";

export const metadata: Metadata = {
  title: "Mental health screening — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="free mental health screening" />;
}
