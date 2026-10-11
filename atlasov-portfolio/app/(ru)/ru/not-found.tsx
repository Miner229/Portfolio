import NotFoundPage from "@/components/pages/NotFoundPage";
import { ui } from "@/data/ui";

export const metadata = { title: ui.ru.notFound.metaTitle };

export default function NotFound() {
  return <NotFoundPage lang="ru" />;
}
