import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zabala Bienes Raíces - Tasá tu Propiedad",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://tasaciones.zabalabienesraices.com.ar",
    siteName: "Zabala Bienes Raíces",
    title: "Tasá tu Propiedad con Profesionales",
    description:
      "Corredores matriculados CUCICBA y CPMCAL. Tasaciones precisas para venta de casas, departamentos y terrenos en Buenos Aires.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zabala Bienes Raíces",
    description:
      "Tasaciones inmobiliarias profesionales. Corredores matriculados en Buenos Aires.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#73161E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${lato.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
