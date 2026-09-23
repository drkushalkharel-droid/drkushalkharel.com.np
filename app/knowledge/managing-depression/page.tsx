import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

const destination = "/knowledge/depression-treatment-nepal/";

export const metadata: Metadata = {
  title: "Understanding and Managing Depression — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Depression Treatment in Nepal" />;
}
