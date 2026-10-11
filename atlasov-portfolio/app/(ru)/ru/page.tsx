import HomePage from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("ru", "/");

export default function Page() {
  return <HomePage lang="ru" />;
}
