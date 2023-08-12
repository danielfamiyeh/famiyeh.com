"use server";

import { getExperiences } from "@/lib/db/experience-db";
import { getProjects } from "@/lib/db/project-db";
import { Project } from "@/models/Project";

export async function getProjectsAction(): Promise<{
  status: string;
  numResults: number;
  projects: Project[];
}> {
  const projects = await getProjects();

  return projects;
}

export async function getExperiencesAction() {
  const experiences = await getExperiences();

  return experiences;
}
