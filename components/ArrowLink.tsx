import Link from "next/link";

export default function ArrowLink({
  href,
  children,
  direction = "right",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  direction?: "right" | "left";
  className?: string;
}) {
  const left = direction === "left";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 border-b border-ink pb-0.5 font-medium text-ink hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent ${className}`}
    >
      {left && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-x-1 group-focus-visible:-translate-x-1"
        >
          ←
        </span>
      )}
      <span>{children}</span>
      {!left && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}
