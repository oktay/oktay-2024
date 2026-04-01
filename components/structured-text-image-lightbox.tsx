/* eslint-disable jsx-a11y/alt-text */

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Image } from "react-datocms";

import { type ImageBlockRecord } from "@/types";

import { Button } from "./ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

type StructuredTextImage = ImageBlockRecord["images"][number];

type Props = {
  images: StructuredTextImage[];
  activeIndex: number;
  hasMultipleImages: boolean;
  open: boolean;
  onNext: () => void;
  onOpenChange: (_open: boolean) => void;
  onPrevious: () => void;
  setCarouselApi: (_api: CarouselApi) => void;
};

export function StructuredTextImageLightbox({
  images,
  activeIndex,
  hasMultipleImages,
  open,
  onNext,
  onOpenChange,
  onPrevious,
  setCarouselApi,
}: Props) {
  const activeImage = images[activeIndex];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-black/90 backdrop-blur-[2px]"
        className="w-[min(98vw,1240px)] max-w-[1240px] gap-0 border-none bg-transparent p-0 shadow-none sm:rounded-none"
      >
        <DialogTitle className="sr-only">Image gallery</DialogTitle>
        <DialogDescription className="sr-only">
          Use arrow keys or controls to navigate between images.
        </DialogDescription>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
          <DialogClose asChild>
            <button
              type="button"
              className="absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-black/60 p-2 text-zinc-200 transition-colors duration-200 hover:bg-black/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close gallery</span>
            </button>
          </DialogClose>

          <Carousel
            setApi={setCarouselApi}
            opts={{ loop: false }}
            className="px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5"
          >
            <CarouselContent className="-ml-0">
              {images.map((image) => (
                <CarouselItem key={image.id} className="pl-0">
                  <div className="flex min-h-[240px] max-h-[80vh] items-center justify-center overflow-hidden rounded-xl bg-black">
                    <Image
                      data={image.responsiveImage}
                      priority
                      usePlaceholder={false}
                      fadeInDuration={0}
                      className="max-h-[80vh] w-auto max-w-full object-contain"
                      pictureClassName="block"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {hasMultipleImages && (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={onPrevious}
                  className="absolute left-4 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-white/20 bg-black/60 text-zinc-100 hover:bg-black/80 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={onNext}
                  className="absolute right-4 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-white/20 bg-black/60 text-zinc-100 hover:bg-black/80 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </>
            )}
          </Carousel>

          <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-black/55 px-4 py-3 text-sm text-zinc-200 sm:px-5">
            <p className="truncate text-zinc-300">
              {activeImage?.title || activeImage?.alt || "Image"}
            </p>
            {hasMultipleImages && (
              <p className="tabular-nums text-zinc-400">{`${activeIndex + 1} / ${images.length}`}</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
