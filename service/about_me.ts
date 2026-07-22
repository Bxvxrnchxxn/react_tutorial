import { AboutMeApiResponse } from "../types/about_me";

export const getAboutMe = async (): Promise<AboutMeApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about_me/get`);
  if (!res.ok) throw new Error("Failed to fetch about me");
  return res.json();
};
