import { Resume } from "@/data/resume";

export type Props = {
  data: Resume;
  theme: "resume" | "experiences" | "education" | "skill";
};

export const TitlesDescs = ({ data, theme }: Props) => {
  const {
    resumeTitle,
    resumeDesc,
    experiencesTitle,
    experiencesDesc,
    educationsTitle,
    educationsDesc,
    skillsTitle,
    skillsDesc,
  } = data;

  const titlesAndDescs = {
    resume: { title: resumeTitle, desc: resumeDesc },
    experiences: { title: experiencesTitle, desc: experiencesDesc },
    education: { title: educationsTitle, desc: educationsDesc },
    skill: { title: skillsTitle, desc: skillsDesc },
  };

  const { title, desc } = titlesAndDescs[theme] || titlesAndDescs.resume; //객체의 동적 접근

  return (
    <section>
      <h1>{title}</h1>
      <p>{desc}</p>
    </section>
  );
};
