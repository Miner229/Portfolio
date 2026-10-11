import type { Metadata, Viewport } from "next";
import { DM_Mono, Schibsted_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { getCvHref } from "@/lib/cv";
import { nav, site } from "@/data/site";
import "./globals.css";

const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dmmono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#f5f1ea" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cvHref = getCvHref();
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Nav name={site.name} initials={site.initials} links={nav} cvHref={cvHref} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
