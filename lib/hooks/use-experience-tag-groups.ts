import { useMemo } from "react";

import { type ExperienceType } from "@/types";

export function useExperienceTagGroups(tags: ExperienceType["tags"]) {
  return useMemo(() => {
    const visibleTags = tags.slice(0, 5);
    const hiddenTagCount = Math.max(tags.length - visibleTags.length, 0);

    return {
      visibleTags,
      hiddenTagCount,
      hasHiddenTags: hiddenTagCount > 0,
    };
  }, [tags]);
}
