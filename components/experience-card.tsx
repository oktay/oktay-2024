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
        <Image
          data={logo.image}
          className="rounded-full relative z-10 border"
        />
      </div>

      <div className="flex-1">
        <strong className="block text-lg font-medium">{workTitle}</strong>

        <div className="text-muted-foreground flex flex-col gap-2 md:flex-row">
          <strong className="font-medium">at {company}</strong>
          <span>
            {formattedStartDate} &mdash; {formattedEndDate}
          </span>
        </div>

        <RichText content={description} />

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map(({ name }) => (
            <Badge key={name}>{name}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
