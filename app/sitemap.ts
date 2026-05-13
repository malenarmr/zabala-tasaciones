import type { MetadataRoute } from "next";

const BASE_URL = "https://www.zabalatasaciones.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Agregá más páginas aquí cuando las tengas
    // {
    //   url: `${BASE_URL}/servicios`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${BASE_URL}/contacto`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
  ];
}
