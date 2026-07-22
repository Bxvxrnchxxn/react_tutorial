import { SkillTechnologiesApiResponse } from "../types/skill_technologies";

export const getSkillTechnologies = async (): Promise<SkillTechnologiesApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/skill_technologies/get`
  );
  if (!res.ok) throw new Error("Failed to fetch skill technologies");
  return res.json();
};
