import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

const destination = "/conditions/ocd/";

export const metadata: Metadata = {
  title: "OCD — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="OCD: Symptoms, Causes, Diagnosis & Treatment" />;
}
