import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

const destination = "/conditions/schizophrenia";

export const metadata: Metadata = {
  title: "Schizophrenia — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Schizophrenia: Symptoms, Causes, Diagnosis & Treatment" />;
}
