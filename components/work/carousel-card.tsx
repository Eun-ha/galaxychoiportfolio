import { CarouselButton } from "./carousel-button";
import { CarouselContent } from "./carousel-content";
import { Images } from "../Images";

type Props = {
  title: string;
  desc: string;
  skill: string;
  path: string;
  url: string;
  download: string;
  git: string;
  index: string;
};

export function CarouselCard({ content }: { content: Props }) {
  const { title, path } = content;
  return (
    <article className="lg:flex lg:flex-row-reverse">
      <Images path={path} title={title} />
      <div className="mt-12 lg:mr-12">
        <CarouselContent content={content} />
        <CarouselButton content={content} />
      </div>
    </article>
  );
}
