import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL = DATA.url;
const ogImage = "/og";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${DATA.name} — Full-Stack Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Kinshuk Sharma",
    "full-stack developer",
    "Django developer",
    "React developer",
    "Python developer",
    "software engineer India",
    "portfolio",
    "AI ML",
    "open source",
  ],
  authors: [{ name: DATA.name, url: SITE_URL }],
  creator: DATA.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${DATA.name} — Full-Stack Developer`,
    description: DATA.description,
    url: "/",
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Full-Stack Developer`,
      },
    ],
  },
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
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} — Full-Stack Developer`,
    description: DATA.description,
    creator: "@kiinshuk",
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: SITE_URL,
  image: `${SITE_URL}/me.jpg`,
  jobTitle: "Full-Stack Developer",
  email: DATA.contact.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: DATA.education[0].school,
    url: DATA.education[0].href,
  },
  worksFor: {
    "@type": "Organization",
    name: DATA.work[0].company,
    url: DATA.work[0].href,
  },
  knowsAbout: DATA.skills,
  sameAs: [
    DATA.contact.social.GitHub.url,
    DATA.contact.social.LinkedIn.url,
    DATA.contact.social.X.url,
  ],
  description: DATA.description,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${DATA.name} Portfolio`,
  url: SITE_URL,
  description: DATA.description,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: DATA.name,
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <script
              type="application/ld+json"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(personJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteJsonLd),
              }}
            />
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
