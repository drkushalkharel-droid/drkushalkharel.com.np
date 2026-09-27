import type { Metadata } from "next";
import RegionHubPage from "../../components/RegionHubPage";
import { getRegion } from "../../data/abroadRegions";
import { regionMetadata } from "../../lib/regionMetadata";

export const metadata: Metadata = regionMetadata("uk-ireland");

export default function Page() {
  return <RegionHubPage region={getRegion("uk-ireland")} />;
}
