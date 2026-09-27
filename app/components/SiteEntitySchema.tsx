import { buildClinicJsonLd, buildPhysicianJsonLd, buildWebSiteJsonLd } from "../lib/siteSchema";
import { serializeJsonLd } from "../lib/schema";

// The one place the full clinic + Physician entities are emitted. Render it on
// the homepage (with the WebSite node) and on /about/ only; all other pages
// reference these entities by @id (see app/lib/siteSchema.ts).
export default function SiteEntitySchema({ includeWebSite = false }: { includeWebSite?: boolean }) {
  const graph = [
    buildClinicJsonLd(),
    buildPhysicianJsonLd(),
    ...(includeWebSite ? [buildWebSiteJsonLd()] : []),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
