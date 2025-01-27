import MultiCarousel from "./multi-carousel";
import { CarouselCard } from "./carousel-card";
import { Work } from "@/data/work";

export async function Carousel({ data }: { data: Work[] }) {
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
