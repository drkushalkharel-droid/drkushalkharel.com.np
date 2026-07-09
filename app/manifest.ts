import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Kushal Kharel",
    short_name: "Dr Kushal",
    description: "Consultant Psychiatrist in Kathmandu",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1E3A8A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
