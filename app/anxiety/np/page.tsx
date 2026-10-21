import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

// Consolidated into /anxiety/
const destination = "/anxiety/";

export const metadata: Metadata = {
  title: "चिन्ता विकार उपचार — पृष्ठ स्थानान्तरित",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Anxiety treatment (Nepali)" />;
}
