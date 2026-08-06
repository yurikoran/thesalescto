import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Sales CTO | Fractional Field CTO & Pre-Sales Consulting",
  description:
    "Your embedded Field CTO, delivered fractionally. I help B2B tech companies close enterprise deals by turning technical credibility into revenue. Book a discovery call.",
  keywords: [
    "fractional sales CTO",
    "sales CTO consulting",
    "field CTO",
    "fractional field CTO",
    "pre-sales consulting",
    "technical due diligence",
    "CTO as a service",
    "pre-sales function build out",
    "fractional CTO",
    "enterprise sales consulting",
    "B2B sales technical support",
  ],
  authors: [{ name: "The Sales CTO", url: "https://thesalescto.com" }],
  creator: "The Sales CTO",
  metadataBase: new URL("https://thesalescto.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesalescto.com",
    siteName: "The Sales CTO",
    title: "The Sales CTO | Your Embedded Field CTO, On Demand",
    description:
      "Not a consultant who advises and leaves. Not a vendor who delivers and disappears. A partner who shares the risk, owns the result, and stays until the deal closes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Sales CTO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sales CTO | Fractional Field CTO & Pre-Sales Consulting",
    description:
      "Your embedded Field CTO, delivered fractionally. Turning technical credibility into revenue.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="qUja6v6k_CJ1xnrJWRV_GG0WZSg8o9GhKjvd51uGx0U" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CVCGK8HQ7S"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CVCGK8HQ7S');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Sales CTO",
              url: "https://thesalescto.com",
              logo: "https://thesalescto.com/logo.png",
              description:
                "Fractional Field CTO and pre-sales consulting for B2B tech companies. Turning technology into revenue.",
              founder: {
                "@type": "Person",
                name: "The Sales CTO Founder",
                jobTitle: "Field CTO",
                url: "https://thesalescto.com/about",
                sameAs: [
                  "https://linkedin.com",
                ],
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@thesalescto.com",
                contactType: "customer service",
                availableLanguage: ["English", "Russian"],
              },
              areaServed: "Worldwide",
              serviceType: [
                "Embedded Sales CTO",
                "Field CTO",
                "Pre-Sales Consulting",
                "Technical Due Diligence",
                "CTO as a Service",
                "Migration Advisory",
                "Sales Team Training",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
