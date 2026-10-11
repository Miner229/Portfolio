import ProjectsPage from "@/components/pages/ProjectsPage";
import { pageMetadata } from "@/lib/metadata";
import { ui } from "@/data/ui";

export const metadata = pageMetadata("ru", "/projects", ui.ru.projectsPage.title, ui.ru.projectsPage.description);

export default function Page() {
  return <ProjectsPage lang="ru" />;
}
