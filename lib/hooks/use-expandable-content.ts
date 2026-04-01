import { type KeyboardEvent, useState } from "react";

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
