import { create } from "zustand";

type WorkCarouselState = {
  currentSlide: number;
  totalSlides: number;
  setCurrentSlide: (currentSlide: number) => void;
  setTotalSlides: (totalSlides: number) => void;
  reset: () => void;
};

export const useWorkCarouselStore = create<WorkCarouselState>((set) => ({
  currentSlide: 0,
  totalSlides: 0,
  setCurrentSlide: (currentSlide) => set({ currentSlide }),
  setTotalSlides: (totalSlides) => set({ totalSlides }),
  reset: () => set({ currentSlide: 0, totalSlides: 0 }),
}));
