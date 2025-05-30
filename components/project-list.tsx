import { cn } from "@/lib/utils";
import { ProjectType } from "@/types";

import ProjectCard from "./project-card";

export default function ProjectList({
  projects,
  className,
  ...props
}: { projects: ProjectType[] } & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-2", className)} {...props}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
