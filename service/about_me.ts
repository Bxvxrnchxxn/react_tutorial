import { apiClient } from "./apiClient";
import { AboutMeApiResponse } from "../types/about_me";

export const getAboutMe = async (): Promise<AboutMeApiResponse> => {
  const res = await apiClient.get<AboutMeApiResponse>("/about_me/get");
  return res.data;
};
