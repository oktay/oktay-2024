/* eslint-disable jsx-a11y/alt-text */

import { Image } from "react-datocms";

import { HeroImageRecord } from "@/types";

export default function StructuredTextHeroImageBlock({
  record,
}: {
  record: HeroImageRecord;
}) {
  return (
    <div className="group relative left-1/2 mt-6 w-[calc(100%-1rem)] max-w-[840px] -translate-x-1/2 overflow-hidden rounded-xl border border-border/70 bg-card/35 transition-colors duration-300 hover:border-border/90 sm:w-[min(calc(100%+2rem),760px)] lg:w-[min(calc(100%+5rem),840px)]">
      <Image
        data={record.image.responsiveImage}
        className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        pictureClassName="block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,hsl(var(--accent)/0.14)_0%,transparent_42%)] opacity-45 transition-opacity duration-300 group-hover:opacity-65" />

      {record.title && (
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
          <p className="max-w-[20ch] text-2xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            {record.title}
          </p>
        </div>
      )}
    </div>
  );
}
