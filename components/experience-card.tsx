/* eslint-disable jsx-a11y/alt-text */

import { Image } from "react-datocms";

import { cn, formatISODate } from "@/lib/utils";
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
  const formattedStartDate = formatISODate(startDate);
  const formattedEndDate = endDate ? formatISODate(endDate) : "Present";

  return (
    <div className={cn("flex gap-6 relative", className)} {...props}>
      <div className="aspect-square w-12 h-12">
        <Image data={logo.image} className="rounded-md relative z-10 border" />
      </div>

      <div className="flex-1">
        <strong className="block text-lg font-normal">{workTitle}</strong>

        <div className="flex flex-col gap-2 md:flex-row font-light">
          <strong className="font-normal">at {company}</strong>
          <span className="text-muted-foreground">
            {formattedStartDate} &mdash; {formattedEndDate}
          </span>
        </div>

        <div className="text-muted-foreground mt-4">
          <RichText content={description} />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map(({ name }) => (
            <Badge variant="secondary" key={name}>
              {name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
