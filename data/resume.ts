export type Experience = {
  company: string;
  title: string;
  date: string;
  description: string;
  slug: string;
};

export type Education = {
  school: string;
  degree: string;
  date: string;
  slug: string;
};

export type Skill = {
  name: string;
  level: number;
  slug: string;
};

export type TitlesDescriptions = {
  title: string;
  desc: string;
  slug: string;
  button: string;
};

export type Category = {
  experiences?: Experience[];
  educations?: Education[];
  skills?: Skill[];
};

export type Resume = {
  contents: TitlesDescriptions[];
  category: Category[];
};

export const resume: Resume[] = [
  {
    contents: [
      {
        title: "메인 레쥬메 타이틀 입니다.",
        desc: "메인 레쥬메 설명 입니다.",
        slug: "",
        button: "resume",
      },
      {
        title: "경험 타이틀 입니다.",
        desc: "경험 설명 입니다.",
        slug: "experiences",
        button: "experiences",
      },
      {
        title: "교육 타이틀 입니다.",
        desc: "교육 설명 입니다.",
        slug: "educations",
        button: "educations",
      },
      {
        title: "스킬 타이틀 입니다.",
        desc: "스킬 설명 입니다.",
        slug: "skills",
        button: "skills",
      },
    ],
    category: [
      {
        experiences: [
          {
            company: "Samsung Electronics",
            title: "Software Engineer",
            date: "2018.07 - 2020.07",
            description:
              "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
            slug: "experiences",
          },
          {
            company: "Samsung Electronics",
            title: "Software Engineer Intern",
            date: "2017.07 - 2017.12",
            description:
              "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
            slug: "experiences",
          },
          {
            company: "Samsung Electronics",
            title: "Software Engineer Intern",
            date: "2016.07 - 2016.12",
            description:
              "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
            slug: "experiences",
          },
        ],
      },
      {
        educations: [
          {
            school: "University of California, San Diego",
            degree: "Bachelor of Science in Computer Science",
            date: "2014.09 - 2018.06",
            slug: "educations",
          },
        ],
      },
      {
        skills: [
          {
            name: "Java",
            level: 4,
            slug: "skills",
          },
          {
            name: "Kotlin",
            level: 4,
            slug: "skills",
          },
          {
            name: "Android",
            level: 4,
            slug: "skills",
          },
        ],
      },
    ],
  },
];

export function getContents(category: string): TitlesDescriptions[] {
  return resume.flatMap((resumecontents) =>
    resumecontents.contents.filter((content) => content.slug === category)
  );
}

export function getButtonTitle(): TitlesDescriptions[] {
  return resume.flatMap((button) => button.contents);
}
