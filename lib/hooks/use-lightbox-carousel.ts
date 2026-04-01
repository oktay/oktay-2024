"use client";

import { type UseEmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type CarouselApi = UseEmblaCarouselType[1];

export function useLightboxCarousel(imageCount: number) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const hasMultipleImages = imageCount > 1;

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    onSelect();
    carouselApi.on("select", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!open || !carouselApi) {
      return;
    }

    carouselApi.scrollTo(activeIndex, true);
    // Sync once when the dialog opens or API gets initialized.
    // Re-syncing on every activeIndex update can fight with Embla animations.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselApi, open]);

  const goToIndex = useCallback(
    (index: number) => {
      if (!carouselApi || !imageCount) {
        return;
      }

      const boundedIndex = ((index % imageCount) + imageCount) % imageCount;

      carouselApi.scrollTo(boundedIndex);
    },
    [carouselApi, imageCount],
  );

  const goToNext = useCallback(() => {
    if (!carouselApi || !hasMultipleImages) {
      return;
    }

    const currentIndex = carouselApi.selectedScrollSnap();
    const nextIndex = currentIndex >= imageCount - 1 ? 0 : currentIndex + 1;

    carouselApi.scrollTo(nextIndex);
  }, [carouselApi, hasMultipleImages, imageCount]);

  const goToPrevious = useCallback(() => {
    if (!carouselApi || !hasMultipleImages) {
      return;
    }

    const currentIndex = carouselApi.selectedScrollSnap();
    const previousIndex = currentIndex <= 0 ? imageCount - 1 : currentIndex - 1;

    carouselApi.scrollTo(previousIndex);
  }, [carouselApi, hasMultipleImages, imageCount]);

  useEffect(() => {
    if (!open || !carouselApi || !hasMultipleImages) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [carouselApi, goToNext, goToPrevious, hasMultipleImages, open]);

  useEffect(() => {
    if (!imageCount) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((current) => Math.min(current, imageCount - 1));
  }, [imageCount]);

  const openAt = useCallback((index: number) => {
    setActiveIndex(index);
    setOpen(true);
  }, []);

  return {
    activeIndex,
    goToIndex,
    goToNext,
    goToPrevious,
    hasMultipleImages,
    open,
    openAt,
    setCarouselApi,
    setOpen,
  };
}
