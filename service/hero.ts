import { HeroApiResponse } from "../types/hero";

export const getHero = async (): Promise<HeroApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero/get`);
  if (!res.ok) throw new Error("Failed to fetch hero");
  return res.json();
};
