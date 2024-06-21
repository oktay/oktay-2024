import { Image } from "react-datocms";

import { formatISODate } from "@/lib/utils";

import RichText from "./rich-text";

export default function ExperienceCard({
  company,
  workTitle,
  description,
  startDate,
  endDate,
  logo,
}: {
  company: string;
  workTitle: string;
  description: string;
  startDate: string;
  endDate: string;
  logo: {
    responsiveImage: any;
  };
}) {
  const formattedStartDate = formatISODate(startDate);
  const formattedEndDate = endDate ? formatISODate(endDate) : "Present";

  return (
    <div className="flex gap-6">
      <div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          data={logo.responsiveImage}
          className="w-5! h-5! rounded-full relative z-10 border"
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
      </div>
    </div>
  );
}
