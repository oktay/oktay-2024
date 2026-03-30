import { KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

import { ExperienceType } from "@/types";

import { PAGE_SIZE } from "./constants";
import { formatISODate } from "./utils";

export const usePagination = (count: number, currentPage: number) => {
  const totalPages = Math.ceil(count / PAGE_SIZE);
  const pageNumbers = [];

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Adjust start and end pages if near the start or end
  if (currentPage - 1 <= 2) {
    endPage = Math.min(5, totalPages);
  }
  if (totalPages - currentPage <= 2) {
    startPage = Math.max(1, totalPages - 4);
  }

  // Always include the first page if not already included
  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) {
      pageNumbers.push("ellipsisLeft"); // Placeholder for left ellipsis
    }
  }

  // Include the current, previous, and next pages
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Always include the last page if not already included
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsisRight"); // Placeholder for right ellipsis
    }
    pageNumbers.push(totalPages);
  }

  return {
    totalPages,
    pageNumbers,
  };
};

export function useExpandableContent(enabled: boolean) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    if (!enabled) {
      return;
    }

    setIsExpanded((prev) => !prev);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!enabled) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return {
    isExpanded,
    toggle,
    onKeyDown,
    tabIndex: enabled ? 0 : -1,
    role: enabled ? ("button" as const) : undefined,
    ariaExpanded: enabled ? isExpanded : undefined,
  };
}

export function useClipboardCopy(text: string, timeoutMs = 1200) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copy = async () => {
    if (!text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, timeoutMs);
    } catch (_error) {
      setCopied(false);
    }
  };

  return { copied, copy };
}

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
