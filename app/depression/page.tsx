import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

const destination = "/conditions/major-depressive-disorder";

export const metadata: Metadata = {
  title: "Depression — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Major Depressive Disorder: Symptoms, Causes, Diagnosis & Treatment" />;
}
