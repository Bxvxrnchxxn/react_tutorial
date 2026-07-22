import { GetInTouchApiResponse } from "../types/get_in_touch";

export const getInTouch = async (): Promise<GetInTouchApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get_in_touch/get`
  );
  if (!res.ok) throw new Error("Failed to fetch get in touch");
  return res.json();
};
