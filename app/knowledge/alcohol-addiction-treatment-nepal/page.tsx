import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

const destination = "/blog/alcohol-addiction-treatment-nepal/";

export const metadata: Metadata = {
  title: "Alcohol Addiction Treatment in Nepal — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Alcohol Addiction Treatment in Nepal" />;
}
