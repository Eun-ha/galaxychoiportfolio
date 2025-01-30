import { getContents } from "@/data/resume";

interface Category {
  category: string;
}

export const TitlesDescriptions = (Props: Category) => {
  const { category } = Props;
  const content = getContents(category);

  return (
    <>
      {content.map((content, index) => (
        <section key={index} className="my-5 lg:mt-0">
          <h2 className="text-lg font-medium">{content.title}</h2>
          <p className="text-text-emphasis">{content.desc}</p>
        </section>
      ))}
    </>
  );
};
