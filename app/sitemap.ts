export const dynamic = "force-static";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://pvbalamandir.com", lastModified: new Date() },
    { url: "https://pvbalamandir.com/about", lastModified: new Date() },
    { url: "https://pvbalamandir.com/admission", lastModified: new Date() },
    { url: "https://pvbalamandir.com/contact", lastModified: new Date() },
    { url: "https://pvbalamandir.com/faculty", lastModified: new Date() },
    { url: "https://pvbalamandir.com/gallery", lastModified: new Date() },
  ];
}
