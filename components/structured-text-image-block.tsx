/* eslint-disable jsx-a11y/alt-text */

import { useLightboxCarousel } from "@/lib/hooks";
import { type ImageBlockRecord } from "@/types";

import { StructuredTextImageLightbox } from "./structured-text-image-lightbox";
import { StructuredTextImageThumbnails } from "./structured-text-image-thumbnails";

export default function StructuredTextImageBlock({
  record,
}: {
  record: ImageBlockRecord;
}) {
  const {
    activeIndex,
    goToNext,
    goToPrevious,
    hasMultipleImages,
    open,
    openAt,
    setCarouselApi,
    setOpen,
  } = useLightboxCarousel(record.images.length);

  if (!record.images.length) {
    return null;
  }

  return (
    <>
      <StructuredTextImageThumbnails
        images={record.images}
        hasMultipleImages={hasMultipleImages}
        onOpenAt={openAt}
      />
      <StructuredTextImageLightbox
        images={record.images}
        activeIndex={activeIndex}
        hasMultipleImages={hasMultipleImages}
        open={open}
        onNext={goToNext}
        onOpenChange={setOpen}
        onPrevious={goToPrevious}
        setCarouselApi={setCarouselApi}
      />
    </>
  );
}
