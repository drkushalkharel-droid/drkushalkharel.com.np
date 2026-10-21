import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

// Consolidated into /adhd/
const destination = "/adhd/";

export const metadata: Metadata = {
  title: "ADHD treatment in Kathmandu — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="ADHD treatment" />;
}
