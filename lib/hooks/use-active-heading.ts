"use client";

import { useEffect, useState } from "react";

type TocHeading = {
  id: string;
};

export function useActiveHeading(headings: TocHeading[]) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id || "");

  useEffect(() => {
    if (!headings.length) {
      return;
    }

    const updateActiveHeading = () => {
      const offset = 120;
      let nextActiveId = headings[0]?.id || "";

      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const top = element.getBoundingClientRect().top;
        if (top - offset <= 0) {
          nextActiveId = id;
        }
      });

      setActiveId(nextActiveId);
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);

    return () => {
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  return { activeId, setActiveId };
}
