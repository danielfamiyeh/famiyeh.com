"use server";

import { Project } from "@/models/Project";
import AboutContent from "@/models/AboutContent";
import { getAboutContents } from "@/lib/db/about-content-db";
import { getProjects, ProjectFilters } from "@/lib/db/project-db";
import { ExperienceFilters, getExperiences } from "@/lib/db/experience-db";

export async function getAboutContentsAction(): Promise<AboutContent> {
  const aboutContents = await getAboutContents();
  return aboutContents;
}

export async function getProjectsAction(filters?: ProjectFilters): Promise<{
  status: string;
  numResults: number;
  projects: Project[];
}> {
  const projects = await getProjects(filters);
  return projects;
}

export async function getExperiencesAction(filters?: ExperienceFilters) {
  const experiences = await getExperiences(filters);
  return experiences;
}
