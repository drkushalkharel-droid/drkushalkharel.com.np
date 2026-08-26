import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

const destination = "/conditions/bipolar-i-disorder";

export const metadata: Metadata = {
  title: "Bipolar Disorder — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Bipolar I Disorder: Symptoms, Causes, Diagnosis & Treatment" />;
}
