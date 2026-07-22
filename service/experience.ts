import { apiClient } from "./apiClient";
import { ExperienceApiResponse } from "../types/experience";

export const getExperience = async (): Promise<ExperienceApiResponse> => {
  const res = await apiClient.get<ExperienceApiResponse>("/experience/get");
  return res.data;
};
