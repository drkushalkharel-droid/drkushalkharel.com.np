import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Consolidated into /anxiety/
const destination = "/anxiety/";

export const metadata: Metadata = {
  title: "Best therapy for anxiety — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Anxiety therapy options" />;
}
