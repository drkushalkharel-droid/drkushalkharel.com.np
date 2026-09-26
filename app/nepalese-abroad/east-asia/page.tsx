import type { Metadata } from "next";
import RegionHubPage from "../../components/RegionHubPage";
import { getRegion } from "../../data/abroadRegions";
import { regionMetadata } from "../../lib/regionMetadata";

export const metadata: Metadata = regionMetadata("east-asia");

export default function Page() {
  return <RegionHubPage region={getRegion("east-asia")} />;
}
