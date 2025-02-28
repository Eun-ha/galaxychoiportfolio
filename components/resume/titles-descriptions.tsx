import { TitleAndDescription } from "@/data/resume";

type Props = {
  slug: string;
};

export const TitlesDescriptions = (props: Props) => {
  const data = TitleAndDescription.find((e) => e.slug === props.slug);
  return (
    <section className="my-5 lg:mt-0">
      <h2 className="text-lg font-medium">{data?.title}</h2>
      <p className="text-text-emphasis">{data?.description}</p>
    </section>
  );
};
