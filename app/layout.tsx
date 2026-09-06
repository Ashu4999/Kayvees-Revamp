import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B132B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kayvees.co.in"),
  title: {
    default: "Kayvees | Turnkey Real Estate, Construction & Interior Solutions - Pune",
    template: "%s | Kayvees Pune",
  },
  description: "Established in 1997, Kayvees is Pune's trusted turnkey real estate enterprise specializing in Industrial Construction, Strategic Farmhouse Land, Commercial Workplaces & Luxury Residential Interior Architecture.",
  keywords: [
    "Kayvees",
    "Kayvees Estates Pune",
    "Industrial Construction Pune",
    "Factory Shed Construction Maharashtra",
    "Farmhouse Land Pune",
    "Industrial Land Kurkumbh MIDC",
    "Commercial Interior Pune",
    "Corporate Office Design",
    "Luxury Residential Interior Pune",
    "Kothrud Real Estate"
  ],
  authors: [{ name: "Kayvees Estates" }],
  creator: "Kayvees",
  publisher: "Kayvees Estates & Infra Projects",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Kayvees | Turnkey Real Estate & Construction Enterprise Since 1997",
    description: "Turnkey Industrial Construction, Developed Farmhouse Plots, and Corporate/Residential Interior Architecture in Pune and Western Maharashtra.",
    url: "https://kayvees.co.in",
    siteName: "Kayvees",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/img/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "Kayvees Industrial Construction & Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayvees | Turnkey Construction, Land & Interiors - Pune",
    description: "Serving Pune since 1997 with 27+ years of engineering rigor and 30+ verified project executions.",
    images: ["/assets/img/banner1.jpg"],
  },
  icons: {
    icon: "/assets/img/logo.jpg",
    apple: "/assets/img/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org RealEstateAgent & GeneralContractor structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "GeneralContractor"],
    "name": "Kayvees",
    "legalName": "Kayvees Estates & Infra Projects",
    "image": "https://kayvees.co.in/assets/img/logo.jpg",
    "url": "https://kayvees.co.in",
    "telephone": "+91 8380068929",
    "email": "kayvees.group@gmail.com",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Devika 128/1b, Plot no.3, Office no.-2, Shramik Society, Paud Road",
      "addressLocality": "Kothrud",
      "addressRegion": "Maharashtra",
      "postalCode": "411029",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5074",
      "longitude": "73.8077"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "18:30"
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "AdministrativeArea", "name": "Maharashtra" }
    ],
    "description": "Established in 1997, Kayvees delivers end-to-end turnkey real estate solutions: Industrial Construction, Farmhouse Land Development, Commercial & Luxury Residential Interior Architecture."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-[#C5A880] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
