import { ExperienceApiResponse } from "../types/experience";

export const getExperience = async (): Promise<ExperienceApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/get`);
  if (!res.ok) throw new Error("Failed to fetch experience");
  return res.json();
};
