import { getContents } from "@/data/resume";

interface Category {
  category: string;
}

export const TitlesDescriptions = (Props: Category) => {
  const { category } = Props;
  const content = getContents(category);

  //console.log(content);

  return (
    <>
      {content.map((content, index) => (
        <section key={index} className="p-4">
          <h2 className="text-xl">{content.title}</h2>
          <p className="text-lg">{content.desc}</p>
        </section>
      ))}
    </>
  );
};
