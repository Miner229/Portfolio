import type { Metadata } from "next";
import ArrowLink from "@/components/ArrowLink";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1160px] px-5 py-24 sm:px-8 md:py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 max-w-[18ch] text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.025em]">
        This page does not exist.
      </h1>
      <p className="mt-6 max-w-[34rem] text-[1.15rem] text-muted">
        The link may be out of date. The selected work and experience are on the homepage.
      </p>
      <div className="mt-10">
        <ArrowLink href="/">Back to the homepage</ArrowLink>
      </div>
    </div>
  );
}
