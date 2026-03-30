"use client";

/* eslint-disable jsx-a11y/alt-text */

import { ChevronDown } from "lucide-react";
import { Image } from "react-datocms";

import {
  useExpandableContent,
  useExperienceDescription,
  useExperiencePeriod,
  useExperienceTagGroups,
} from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { ExperienceType } from "@/types";

import RichText from "./rich-text";
import { Badge } from "./ui/badge";

export default function ExperienceCard({
  company,
  workTitle,
  description,
  startDate,
  endDate,
  logo,
  tags,
  className,
  ...props
}: ExperienceType & React.HTMLProps<HTMLDivElement>) {
  const { formattedStartDate, formattedEndDate } = useExperiencePeriod(
    startDate,
    endDate,
  );
  const { summary, details, hasDetails } =
    useExperienceDescription(description);
  const { visibleTags, hiddenTagCount, hasHiddenTags } =
    useExperienceTagGroups(tags);
  const hasExpandableContent = hasDetails || hasHiddenTags;
  const { isExpanded, toggle, onKeyDown, tabIndex, role, ariaExpanded } =
    useExpandableContent(hasExpandableContent);
  const tagsToRender = hasExpandableContent && isExpanded ? tags : visibleTags;

  return (
    <div
      className={cn(
        "group flex gap-6 relative rounded-xl border border-transparent p-3 -m-3 transition-colors duration-200 hover:border-border/70 hover:bg-card/40",
        hasExpandableContent && "cursor-pointer",
        hasExpandableContent && "pb-10",
        className,
      )}
      onClick={toggle}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      role={role}
      aria-expanded={ariaExpanded}
      {...props}
    >
      <div className="relative mt-0.5">
        <Image
          data={logo.image}
          className="relative z-10 aspect-square h-12 w-12 rounded-md border border-border/70 transition-colors duration-200 group-hover:border-accent/40"
        />
      </div>

      <div className="flex-1">
        <strong className="block text-lg font-medium leading-tight">
          {workTitle}
        </strong>

        <div className="mt-1 flex flex-col gap-1.5 md:flex-row md:items-center md:gap-2 text-sm">
          <strong className="font-normal text-foreground/90">
            at {company}
          </strong>
          <span className="hidden md:inline text-muted-foreground/70">
            &middot;
          </span>
          <span className="text-muted-foreground">
            {formattedStartDate} &mdash; {formattedEndDate}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tagsToRender.map(({ name }) => (
            <Badge variant="secondary" key={name}>
              {name}
            </Badge>
          ))}
          {!isExpanded && hiddenTagCount > 0 && (
            <Badge variant="secondary">+{hiddenTagCount}</Badge>
          )}
        </div>

        <div className="mt-4 max-w-[62ch] text-muted-foreground [&_ul]:space-y-1 [&_li]:leading-6">
          <RichText content={summary} />

          {hasDetails && (
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isExpanded
                  ? "mt-3 max-h-[1200px] opacity-100"
                  : "max-h-0 opacity-0",
              )}
            >
              <RichText content={details} />
            </div>
          )}
        </div>
      </div>

      {hasExpandableContent && (
        <span
          className={cn(
            "pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center justify-center text-muted-foreground transition-all duration-200",
            isExpanded
              ? "opacity-100"
              : "opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100",
          )}
        >
          <ChevronDown
            size={20}
            className={cn(
              "mb-1 transition-transform duration-300",
              isExpanded && "rotate-180",
            )}
          />
        </span>
      )}
    </div>
  );
}
