import { getContents } from "@/data/resume";

export type Theme1 = {
  theme: "resume" | "experiences" | "education" | "skill";
};

interface Theme {
  category: string;
}

export const TitlesDescriptions = (Props: Theme) => {
  const { category } = Props;
  const content = getContents(category);

  return (
    <section>
      {content.map((content, index) => (
        <div key={index}>
          <h2>{content.title}</h2>
          <p>{content.desc}</p>
        </div>
      ))}
    </section>
  );
};
