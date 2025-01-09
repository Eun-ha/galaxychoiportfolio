import { ExternalLink } from "./external-link";
import { Images } from "./Images";

type Props = {
  title: string;
  desc: string;
  skill: string;
  path: string;
  url: string;
  download: string;
  index: string;
};

export function CarouselCard({ content }: { content: Props }) {
  const { title, desc, skill, path, url, download, index } = content;
  return (
    <article className="lg:flex lg:flex-row-reverse">
      <Images path={path} title={title} />
      <div className="mt-16 lg:mr-16">
        <span className="text-8xl">{index}</span>
        <h3 className="text-4xl pt-8">{title}</h3>
        <p className="text-2xl pt-8 text-subfontcolor">{desc}</p>
        <p className="text-3xl pt-8 text-point-red">{skill}</p>
        <div className="border-t-[1px] border-subfontcolor pt-8 mt-8">
          <ExternalLink href={url}>경로</ExternalLink>
          <ExternalLink href={download}>다운로드</ExternalLink>
        </div>
      </div>
    </article>
  );
}
