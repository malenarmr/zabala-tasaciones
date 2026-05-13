import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = "https://www.zabalatasaciones.com.ar";

export const metadata: Metadata = {
  // Básicos
  title: {
    default: "Zabala Bienes Raíces - Tasá tu Propiedad",
    template: "%s | Zabala Bienes Raíces",
  },
  description:
    "Tasaciones inmobiliarias profesionales en Buenos Aires. Corredores matriculados CUCICBA y CPMCAL. Conocé el valor real de tu casa, departamento o terreno. Tasación gratuita.",
  keywords: [
    "tasación inmobiliaria",
    "tasar propiedad",
    "valor de propiedad",
    "vender casa",
    "tasación profesional",
    "corredor inmobiliario",
    "valuación inmueble",
    "tasaciones Buenos Aires",
    "Zabala Bienes Raíces",
    "CUCICBA",
    "Belgrano",
  ],
  authors: [{ name: "Zabala Bienes Raíces" }],
  creator: "Zabala Bienes Raíces",
  publisher: "Zabala Bienes Raíces",

  // Canonical y alternates
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: "Zabala Bienes Raíces",
    title: "Tasá tu Propiedad con Profesionales Matriculados",
    description:
      "Corredores matriculados CUCICBA y CPMCAL. Tasaciones precisas para venta de casas, departamentos y terrenos en Buenos Aires.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zabala Bienes Raíces - Tasaciones Inmobiliarias Profesionales",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Zabala Bienes Raíces - Tasaciones Inmobiliarias",
    description:
      "Tasaciones inmobiliarias profesionales. Corredores matriculados CUCICBA y CPMCAL en Buenos Aires.",
    images: ["/og-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },

  // Manifest
  manifest: "/manifest.json",

  // Verification (agregá tus códigos cuando los tengas)
  // verification: {
  //   google: 'tu-codigo-de-google-search-console',
  // },

  // Categoría
  category: "real estate",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#73161E",
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Zabala Bienes Raíces",
  description:
    "Tasaciones inmobiliarias profesionales en Buenos Aires. Corredores matriculados CUCICBA y CPMCAL.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.5621,
    longitude: -58.4564,
  },
  areaServed: {
    "@type": "City",
    name: "Buenos Aires",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/zabalabienesraicesok"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Tasación",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tasación de Propiedades",
          description:
            "Tasaciones profesionales para casas, departamentos y terrenos",
        },
      },
    ],
  },
};

// LocalBusiness adicional para SEO local
const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Zabala Bienes Raíces",
  description: "Tasaciones inmobiliarias profesionales en Buenos Aires",
  url: BASE_URL,
  telephone: "+54 9 11 5127-5118",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av Cabildo 2040. Boulevard Los Andes",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    postalCode: "1426",
    addressCountry: "AR",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
