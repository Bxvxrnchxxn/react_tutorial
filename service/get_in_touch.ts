import { apiClient } from "./apiClient";
import { GetInTouchApiResponse } from "../types/get_in_touch";

export const getInTouch = async (): Promise<GetInTouchApiResponse> => {
  const res = await apiClient.get<GetInTouchApiResponse>("/get_in_touch/get");
  return res.data;
};
