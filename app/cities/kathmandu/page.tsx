import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

const destination = "/psychiatry-clinic-kathmandu/";

export const metadata: Metadata = {
  title: "Kathmandu — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Psychiatry Clinic in Kalanki, Kathmandu" />;
}
