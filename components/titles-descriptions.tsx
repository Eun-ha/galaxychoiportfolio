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
        <section key={index}>
          <h2>{content.title}</h2>
          <p>{content.desc}</p>
        </section>
      ))}
    </>
  );
};
