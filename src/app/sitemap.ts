import { MetadataRoute } from "next";
import { formaciones } from "@/data/formaciones";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.syntiqgroup.com";
  const lastModified = new Date();

  const coursePages = formaciones
    .filter((f) => f.status !== "DRAFT")
    .map((f) => ({
      url: `${baseUrl}/formaciones/talleres/${f.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/formaciones`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/formaciones/talleres-intensivos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/formaciones/curso-modular`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/formaciones/in-company`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...coursePages,
    {
      url: `${baseUrl}/formacion-inteligencia-artificial-republica-dominicana`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
