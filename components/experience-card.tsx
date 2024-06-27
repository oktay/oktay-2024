import { Image } from "react-datocms";

import { formatISODate } from "@/lib/utils";

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
}: {
  company: string;
  workTitle: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string;
  logo: {
    responsiveImage: any;
  };
}) {
  const formattedStartDate = formatISODate(startDate);
  const formattedEndDate = endDate ? formatISODate(endDate) : "Present";

  return (
    <div className="flex gap-6 relative">
      <div className="aspect-square w-12 h-12 sticky top-2 z-10">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          data={logo.responsiveImage}
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
          {tags
            .split(",")
            .filter(Boolean)
            .map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
