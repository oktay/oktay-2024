import { useMemo } from "react";

import { formatISODate } from "@/lib/utils";
import { type ExperienceType } from "@/types";

export function useExperiencePeriod(
  startDate: ExperienceType["startDate"],
  endDate: ExperienceType["endDate"],
) {
  return useMemo(
    () => ({
      formattedStartDate: formatISODate(startDate),
      formattedEndDate: endDate ? formatISODate(endDate) : "Present",
    }),
    [startDate, endDate],
  );
}
