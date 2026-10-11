import { JetBrains_Mono, Onest } from "next/font/google";

// Both families include Cyrillic, which the Russian version needs.
export const sans = Onest({ subsets: ["latin", "cyrillic"], variable: "--font-onest", display: "swap" });
export const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});
