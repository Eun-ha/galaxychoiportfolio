import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  skill: string;
  path: string;
  url?: string;
  download?: string;
};

export function CarouselCard({ content }: { content: Props }) {
  const { title, desc, skill, path, url, download } = content;
  return (
    <div>
      <Image
        src={`/images/works/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{skill}</p>
        <p>{url}</p>
        <p>{download}</p>
      </div>
    </div>
  );
}
