import { getContents } from "@/data/resume";

interface Category {
  category: string;
}

export const TitlesDescriptions = (Props: Category) => {
  const { category } = Props;
  const content = getContents(category);

  console.log(content);

  return (
    <>
      {content.map((content, index) => (
        <section key={index} className="my-4 lg:my-0 lg:mb-4">
          <h2 className="text-2xl">{content.title}</h2>
          <p className="text-xl text-subfontcolor">{content.desc}</p>
        </section>
      ))}
    </>
  );
};
