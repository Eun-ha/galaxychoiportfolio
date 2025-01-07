import { ResumeContent } from "./resume-content";

interface Category {
  category: string;
}

export const ResumeContents = (Props: Category) => {
  const { category } = Props;

  //console.log(category);

  return (
    <>
      {category === "experiences" ? (
        <ResumeContent type="experiences" />
      ) : category === "educations" ? (
        <ResumeContent type="educations" />
      ) : category === "skills" ? (
        <ResumeContent type="skills" />
      ) : (
        <ResumeContent type="descriptions" />
      )}
    </>
  );
};
