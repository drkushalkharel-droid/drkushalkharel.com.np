import type { Metadata } from "next";
import RedirectNotice from "../components/RedirectNotice";

const destination = "/conditions/adhd/";

export const metadata: Metadata = {
  title: "ADHD — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="ADHD: Symptoms, Causes, Diagnosis & Treatment" />;
}
