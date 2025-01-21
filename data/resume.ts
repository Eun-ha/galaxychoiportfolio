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

export type Certificate = {
  name: string;
  level: number;
};

export type Description = {
  title: string;
  date: string;
  performance: string[];
  role: string;
  skills: string;
};

export type Content = {
  title: string;
  desc: string;
  slug: string;
  button: string;
};

export type Work = {
  title: string;
  desc: string;
  skill: string;
  path: string;
  url: string;
  download: string;
  index: string;
};

export type Resume = {
  contents: Content[];
  experiences: Experience[];
  educations: Education[];
  certificates: Certificate[];
  descriptions: Description[];
  works: Work[];
};

export const resume: Resume[] = [
  {
    contents: [
      {
        title: "경력기술서 타이틀 입니다.",
        desc: "경력기술서 설명 입니다.",
        slug: "descriptions",
        button: "descriptions",
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
        slug: "certificates",
        button: "certificates",
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
    certificates: [
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
    works: [
      {
        title: "한국마사회",
        desc: "한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트",
        skill: "html, css, jquery",
        path: "01",
        url: "www.naver.com",
        download: "www.naver.com",
        index: "01",
      },
      {
        title: "엔씨",
        desc: "유지보수 한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트",
        skill: "html, css, jquery",
        path: "02",
        url: "www.naver.com",
        download: "www.naver.com",
        index: "02",
      },
      {
        title: "한국마사회2",
        desc: "한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트한국마사회 말병원 프로젝트",
        skill: "html, css, jquery",
        path: "03",
        url: "www.naver.com",
        download: "www.naver.com",
        index: "03",
      },
      {
        title: "엔씨2",
        desc: "유지보수 한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트 한국마사회 말병원 프로젝트",
        skill: "html, css, jquery",
        path: "03",
        url: "www.naver.com",
        download: "www.naver.com",
        index: "04",
      },
    ],
  },
];

// 전체 데이터를 가져옵니다.
export function getAll(): Content[] {
  return resume.flatMap((content) => content.contents);
}

// 동적 파라미터에 기반한 경험, 교육, 스킬 제목 및 설명을 반환합니다.
export function getContents(category: string): Content[] {
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

export function getCertifications(): Certificate[] {
  return resume.flatMap((contents) => contents.certificates);
}

export function getDescriptions(): Description[] {
  return resume.flatMap((contents) => contents.descriptions);
}

export function getWorks(): Work[] {
  return resume.flatMap((contents) => contents.works);
}

/**
 * api에 필요한 데이터
 */

export const certificates = [
  {
    name: "Java1",
    level: 1,
  },
  {
    name: "Kotlin2",
    level: 4,
  },
  {
    name: "Android3",
    level: 4,
  },
  {
    name: "Java4",
    level: 4,
  },
];

export const educations = [
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
];

export const experiences = [
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
];

export const descriptions = [
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
];
