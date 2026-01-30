import type { WithNull } from "@/shared/types/main-types";

export const getAbbrName = (
  firstName?: WithNull<string>,
  thirdName?: WithNull<string>,
) => {
  const tChar =
    thirdName && thirdName.length > 0
      ? thirdName.trim().charAt(0).toUpperCase()
      : "";

  const fChar =
    firstName && firstName.length > 0
      ? firstName.trim().charAt(0).toUpperCase()
      : "";

  return `${tChar}${fChar}`;
};
