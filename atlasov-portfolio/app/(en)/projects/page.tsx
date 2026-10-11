import ProjectsPage from "@/components/pages/ProjectsPage";
import { pageMetadata } from "@/lib/metadata";
import { ui } from "@/data/ui";

export const metadata = pageMetadata("en", "/projects", ui.en.projectsPage.title, ui.en.projectsPage.description);

export default function Page() {
  return <ProjectsPage lang="en" />;
}
