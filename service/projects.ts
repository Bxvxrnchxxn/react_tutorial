import { apiClient } from "./apiClient";
import { ProjectsApiResponse } from "../types/projects";

export const getProjects = async (): Promise<ProjectsApiResponse> => {
  const res = await apiClient.get<ProjectsApiResponse>("/projects/get");
  return res.data;
};
