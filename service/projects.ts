import { ProjectsApiResponse } from "../types/projects";

export const getProjects = async (): Promise<ProjectsApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/get`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
};
