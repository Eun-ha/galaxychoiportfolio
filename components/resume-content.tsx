import {
  Education,
  Experience,
  getEducations,
  getExperiences,
  getSkills,
  Skill,
} from "@/data/resume";

export const ResumeContent = ({
  type,
}: {
  type: "educations" | "experiences" | "skills";
}) => {
  const getData = () => {
    switch (type) {
      case "educations":
        return getEducations();
      case "experiences":
        return getExperiences();
      case "skills":
        return getSkills();
      default:
        return [];
    }
  };

  const contents = getData();

  return (
    <section>
      {contents.map((content, index) => (
        <div key={index}>
          {type === "educations" && (
            <>
              <p>{(content as Education).school}</p>
              <p>{(content as Education).date}</p>
              <p>{(content as Education).degree}</p>
            </>
          )}
          {type === "experiences" && (
            <>
              <p>{(content as Experience).company}</p>
              <p>{(content as Experience).date}</p>
              <p>{(content as Experience).description}</p>
            </>
          )}
          {type === "skills" && (
            <>
              <p>{(content as Skill).name}</p>
              <p>{(content as Skill).level}</p>
            </>
          )}
        </div>
      ))}
    </section>
  );
};
