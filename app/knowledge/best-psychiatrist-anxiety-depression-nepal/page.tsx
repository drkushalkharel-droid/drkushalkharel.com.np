import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

const destination = "/best-psychiatrist-nepal/";

export const metadata: Metadata = {
  title: "Best Psychiatrist for Anxiety and Depression — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Best Psychiatrist in Kathmandu: How to Actually Choose One" />;
}
