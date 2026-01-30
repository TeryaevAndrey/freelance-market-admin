import { USER_STATUS_NAMES, type USER_STATUSES } from "./types";

export const getUserStatusName = (status: USER_STATUSES): string => {
  return USER_STATUS_NAMES[status] || "Неизвестно";
};
