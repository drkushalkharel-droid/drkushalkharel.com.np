import type { Metadata } from "next";
import RedirectNotice from "../../components/RedirectNotice";

const destination = "/knowledge/anxiety-treatment-nepal/";

export const metadata: Metadata = {
  title: "Anxiety and Depression Treatment Options — page moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RedirectNotice to={destination} label="Anxiety Treatment in Nepal, including non-medication options" />;
}
