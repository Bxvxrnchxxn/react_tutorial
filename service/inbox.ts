import { apiClient } from "./apiClient";
import { InboxCreateApiResponse, InboxCreatePayload } from "../types/inbox";

export const createInbox = async (
  payload: InboxCreatePayload
): Promise<InboxCreateApiResponse> => {
  const res = await apiClient.post<InboxCreateApiResponse>(
    "/inbox/create",
    payload
  );
  return res.data;
};
