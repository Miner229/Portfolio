import CasePage, { caseMetadata, caseParams } from "@/components/pages/CasePage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseParams();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return caseMetadata("en", slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <CasePage lang="en" slug={slug} />;
}
