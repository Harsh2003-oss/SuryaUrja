import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://smartsuryaurja.com",
      lastModified: new Date(),
    },
    {
      url: "https://smartsuryaurja.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://smartsuryaurja.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://smartsuryaurja.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://smartsuryaurja.com/contact",
      lastModified: new Date(),
    },
  ];
}