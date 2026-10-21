import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Consolidated into /anxiety/ (anxiety cluster primary)
const destination = "/anxiety/";

export const metadata: Metadata = {
  title: "Anxiety and depression treatment options in Nepal — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Anxiety treatment in Nepal" />;
}
