import { cn } from "@/lib/utils";
import { ProjectType } from "@/types";

import ProjectCard from "./project-card";

export default function ProjectList({
  projects,
  className,
  ...props
}: { projects: ProjectType[] } & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      {projects.map((project: any) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
