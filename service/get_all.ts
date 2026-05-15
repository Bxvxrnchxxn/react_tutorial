import { PortfolioApiResponse } from "../types/get_all";

export const getPortfolioAll = async (): Promise<PortfolioApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio/get_all`
  );
  if (!res.ok) throw new Error("Failed to fetch portfolio data");
  return res.json();
};
