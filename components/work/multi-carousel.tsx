"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useWorkCarouselStore } from "@/stores/work-carousel-store";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type CustomButtonGroupProps = {
  next: () => void;
  previous: () => void;
};

const CustomButtonGroup = ({ next, previous }: CustomButtonGroupProps) => {
  const router = useRouter();
  const currentSlide = useWorkCarouselStore((state) => state.currentSlide);
  const totalSlides = useWorkCarouselStore((state) => state.totalSlides);

  const handleNext = () => {
    const newSlide = Math.min((currentSlide || 0) + 1, totalSlides - 1);
    router.push(`?slide=${newSlide}`);
    next();
  };

  const handlePrev = () => {
    const newSlide = Math.max((currentSlide || 0) - 1, 0);
    router.push(`?slide=${newSlide}`);
    previous();
  };

  return (
    <div>
      {currentSlide !== 0 ? (
        <>
          <button
            onClick={handlePrev}
            className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
          ></button>
        </>
      ) : (
        <></>
      )}
      {currentSlide !== totalSlides - 1 ? (
        <>
          <button
            onClick={handleNext}
            className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
          ></button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};
export default function MultiCarousel({ children }: Props) {
  const setCurrentSlide = useWorkCarouselStore((state) => state.setCurrentSlide);
  const setTotalSlides = useWorkCarouselStore((state) => state.setTotalSlides);
  const reset = useWorkCarouselStore((state) => state.reset);
  const carouselRef = useRef<Carousel | null>(null);

  // children을 배열로 변환
  const itemsArray = Array.isArray(children) ? children : [children];
  const totalSlides = itemsArray.length;

  useEffect(() => {
    setTotalSlides(totalSlides);

    const searchParams = new URLSearchParams(window.location.search);
    const slideParam = parseInt(searchParams.get("slide") || "0", 10);
    const safeSlide = isNaN(slideParam) ? 0 : Math.max(0, slideParam);
    setCurrentSlide(safeSlide);

    // ✅ Carousel이 mount된 후 슬라이드 이동
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.goToSlide(safeSlide);
      }
    }, 0);

    return () => {
      reset();
    };
  }, [reset, setCurrentSlide, setTotalSlides, totalSlides]);

  return (
    <div className="relative">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={
          <CustomButtonGroup
            next={() => carouselRef.current && carouselRef.current.next(1)}
            previous={() =>
              carouselRef.current && carouselRef.current.previous(1)
            }
          />
        }
        infinite={false}
        partialVisible={false}
        //customTransition="all .5"
        afterChange={(previousSlide, { currentSlide }) => {
          setCurrentSlide(currentSlide);
        }}
      >
        {children}
      </Carousel>
    </div>
  );
}
