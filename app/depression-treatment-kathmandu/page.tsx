import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

// Consolidated into /depression/
const destination = "/depression/";

export const metadata: Metadata = {
  title: "Depression treatment in Kathmandu — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Depression treatment in Kathmandu" />;
}
