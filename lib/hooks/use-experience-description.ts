import { useMemo } from "react";

import { type ExperienceType } from "@/types";

export function useExperienceDescription(
  description: ExperienceType["description"],
) {
  return useMemo(() => {
    const [summary, ...rest] = description.split("\n\n");
    const details = rest.join("\n\n").trim();

    return {
      summary,
      details,
      hasDetails: Boolean(details),
    };
  }, [description]);
}
