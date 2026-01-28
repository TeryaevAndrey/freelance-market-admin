import type { WithNull } from "@/shared/types/main-types";

export const getFullName = (
  firstName?: WithNull<string>,
  lastName?: WithNull<string>,
  thirdName?: WithNull<string>,
) => {
  return [lastName, firstName, thirdName].filter(Boolean).join(" ");
};
