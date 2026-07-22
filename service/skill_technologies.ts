import { apiClient } from "./apiClient";
import { SkillTechnologiesApiResponse } from "../types/skill_technologies";

export const getSkillTechnologies = async (): Promise<SkillTechnologiesApiResponse> => {
  const res = await apiClient.get<SkillTechnologiesApiResponse>(
    "/skill_technologies/get"
  );
  return res.data;
};
