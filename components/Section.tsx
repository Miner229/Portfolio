/** Editorial two-column section: understated heading on the left, content on the right. */
export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="border-t border-line py-14 md:py-20">
      <div className="grid gap-6 md:grid-cols-12 md:gap-12">
        <h2 id={id ? `${id}-title` : undefined} className="text-lg font-medium text-muted md:col-span-3">
          {title}
        </h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
