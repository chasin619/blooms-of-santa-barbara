import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE.lastModified;
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.85)),
    page("/portfolio", 0.8, "weekly"),
    page("/about", 0.7),
    page("/reviews", 0.7),
    page("/locations", 0.7),
    ...locations.map((l) => page(`/locations/${l.slug}`, 0.75)),
    page("/faq", 0.6),
    page("/contact", 0.8),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
