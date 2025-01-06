export type Experience = {
  company: string;
  title: string;
  date: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  date: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Descriptions = {
  title: string;
  date: string;
  performance: string[];
  role: string;
  skills: string;
};

export type Contents = {
  title: string;
  desc: string;
  slug: string;
  button: string;
};

export type Resume = {
  contents: Contents[];
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  descriptions: Descriptions[];
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
    experiences: [
      {
        company: "Samsung Electronics",
        title: "Software Engineer",
        date: "2018.07 - 2020.07",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "Samsung Electronics",
        title: "Software Engineer Intern",
        date: "2017.07 - 2017.12",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "Samsung Electronics",
        title: "Software Engineer Intern",
        date: "2016.07 - 2016.12",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "Samsung Electronics",
        title: "Software Engineer Intern",
        date: "2017.07 - 2017.12",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "Samsung Electronics",
        title: "Software Engineer Intern",
        date: "2016.07 - 2016.12",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "Samsung Electronics",
        title: "Software Engineer Intern",
        date: "2017.07 - 2017.12",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "Samsung Electronics",
        title: "Software Engineer Intern",
        date: "2016.07 - 2016.12",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
    ],
    educations: [
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        date: "2014.09 - 2018.06",
      },
    ],
    skills: [
      {
        name: "Java",
        level: 4,
      },
      {
        name: "Kotlin",
        level: 4,
      },
      {
        name: "Android",
        level: 4,
      },
      {
        name: "Java",
        level: 4,
      },
      {
        name: "Kotlin",
        level: 4,
      },
      {
        name: "Android",
        level: 4,
      },
    ],
    descriptions: [
      {
        title: "엔씨소프트 블레이드&소울 2 랭킹 신규 페이지 UI 개발",
        date: "2023.6 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "반응형 디자인 적용",
          "다크모드 반영",
          "컴포넌트 별 UI 개발",
          "데이터 케이스별 react-select UI 개발",
          "시멘틱 마크업 작업",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케죿 관리",
        ],

        role: "UI 개발",
        skills:
          "시맨틱 태그 마크업, Styled-component, Pure css, React-select, React",
      },
      {
        title: "엔씨소프트 쓰롞 앤 리버티 일정표 신규 페이지 UI 개발",
        date: "2023.10 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "반응형 디자인 적용",
          "다크모드 반영",
          "스크롤에 반응하는 UI 동작을 위한 Javascript 작업",
          "시멘틱 마크업 작업",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케죿 관리",
        ],
        role: "UI 개발",
        skills: "시맨틱 태그 마크업, tailwind css, pure css, Javascript, React",
      },
      {
        title: "엔씨소프트 블레이드&소울 2 랭킹 신규 페이지 UI 개발",
        date: "2023.6 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "반응형 디자인 적용",
          "다크모드 반영",
          "컴포넌트 별 UI 개발",
          "데이터 케이스별 react-select UI 개발",
          "시멘틱 마크업 작업",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케죿 관리",
        ],

        role: "UI 개발",
        skills:
          "시맨틱 태그 마크업, Styled-component, Pure css, React-select, React",
      },
      {
        title: "엔씨소프트 쓰롞 앤 리버티 일정표 신규 페이지 UI 개발",
        date: "2023.10 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "반응형 디자인 적용",
          "다크모드 반영",
          "스크롤에 반응하는 UI 동작을 위한 Javascript 작업",
          "시멘틱 마크업 작업",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케죿 관리",
        ],
        role: "UI 개발",
        skills: "시맨틱 태그 마크업, tailwind css, pure css, Javascript, React",
      },
      {
        title: "엔씨소프트 블레이드&소울 2 랭킹 신규 페이지 UI 개발",
        date: "2023.6 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "반응형 디자인 적용",
          "다크모드 반영",
          "컴포넌트 별 UI 개발",
          "데이터 케이스별 react-select UI 개발",
          "시멘틱 마크업 작업",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케죿 관리",
        ],

        role: "UI 개발",
        skills:
          "시맨틱 태그 마크업, Styled-component, Pure css, React-select, React",
      },
      {
        title: "엔씨소프트 쓰롞 앤 리버티 일정표 신규 페이지 UI 개발",
        date: "2023.10 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "반응형 디자인 적용",
          "다크모드 반영",
          "스크롤에 반응하는 UI 동작을 위한 Javascript 작업",
          "시멘틱 마크업 작업",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케죿 관리",
        ],
        role: "UI 개발",
        skills: "시맨틱 태그 마크업, tailwind css, pure css, Javascript, React",
      },
    ],
  },
];

// 전체 데이터를 가져옵니다.
export function getAll(): Contents[] {
  return resume.flatMap((content) => content.contents);
}

// 동적 파라미터에 기반한 경험, 교육, 스킬 제목 및 설명을 반환합니다.
export function getContents(category: string): Contents[] {
  return resume.flatMap((contents) =>
    contents.contents.filter((content) => content.slug === category)
  );
}

export function getExperiences(): Experience[] {
  return resume.flatMap((contents) => contents.experiences);
}

export function getEducations(): Education[] {
  return resume.flatMap((contents) => contents.educations);
}

export function getSkills(): Skill[] {
  return resume.flatMap((contents) => contents.skills);
}

export function getDescriptions(): Descriptions[] {
  return resume.flatMap((contents) => contents.descriptions);
}
