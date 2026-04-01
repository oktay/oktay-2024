/* eslint-disable jsx-a11y/alt-text */

import { Image } from "react-datocms";

import { cn } from "@/lib/utils";
import { type ImageBlockRecord } from "@/types";

type StructuredTextImage = ImageBlockRecord["images"][number];

type Props = {
  images: StructuredTextImage[];
  hasMultipleImages: boolean;
  onOpenAt: (_index: number) => void;
};

export function StructuredTextImageThumbnails({
  images,
  hasMultipleImages,
  onOpenAt,
}: Props) {
  return (
    <div
      className={cn(
        "my-6 flex gap-4",
        hasMultipleImages ? "flex-nowrap" : "flex-wrap",
      )}
    >
      {images.map((image, index) => (
        <button
          key={image.id}
          type="button"
          onClick={() => onOpenAt(index)}
          className={cn(
            "group overflow-hidden rounded-lg border border-border text-left transition-colors duration-200 hover:border-border/80",
            hasMultipleImages ? "min-w-0 flex-1" : "w-full",
          )}
        >
          <Image
            data={image.responsiveImage}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
            pictureClassName="block h-full w-full object-cover"
          />
          <span className="sr-only">{`Open image ${index + 1}`}</span>
        </button>
      ))}
    </div>
  );
}
