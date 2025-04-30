type Props = {
  title: string;
  description: string;
  skill: string;
  path: string;
  index: string;
};

export function CarouselContent({ content }: { content: Props }) {
  const { title, description, skill, index } = content;
  return (
    <>
      <span className="text-xl lg:text-5xl">{index}</span>
      <h3 className="mt-4 text-lg lg:text-3xl">{title}</h3>
      <p className="mt-4 text-text-emphasis lg:text-lg">{description}</p>
      <p className="mt-4 text-point-red lg:text-lg">{skill}</p>
    </>
  );
}
