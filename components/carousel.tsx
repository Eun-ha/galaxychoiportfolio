import { getWorks } from "@/data/resume";
import MultiCarousel from "./multi-carousel";
import { CarouselCard } from "./carousel-card";

export function Carousel() {
  const data = getWorks();

  return (
    <section>
      <MultiCarousel>
        {data.map((data, index) => (
          <CarouselCard key={index} content={data} />
        ))}
      </MultiCarousel>
    </section>
  );
}
