import { apiClient } from "./apiClient";
import { HeroApiResponse } from "../types/hero";

export const getHero = async (): Promise<HeroApiResponse> => {
  const res = await apiClient.get<HeroApiResponse>("/hero/get");
  return res.data;
};
