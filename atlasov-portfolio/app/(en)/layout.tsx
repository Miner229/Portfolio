import "../globals.css";
import RootDocument from "@/components/RootDocument";
import { baseMetadata, viewport as siteViewport } from "@/lib/metadata";

export const metadata = baseMetadata("en");
export const viewport = siteViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
