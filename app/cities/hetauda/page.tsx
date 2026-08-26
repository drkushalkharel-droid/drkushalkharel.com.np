import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

const destination = "/online-psychiatrist-nepal";

export const metadata: Metadata = {
  title: "Hetauda — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Online Psychiatrist Consultation in Nepal" />;
}
