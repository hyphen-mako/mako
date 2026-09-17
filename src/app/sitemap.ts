import type { MetadataRoute } from "next";

const BASE_URL = "https://mako-landing.hyphen.it.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-17");
  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/guide`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
