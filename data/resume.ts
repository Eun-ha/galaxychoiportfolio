export type Experience = {
  company: string;
  title: string;
  date: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  institution: string;
  date: string;
};

export type Certificate = {
  name: string;
  date: string;
  authority: string;
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

export type Meta = {
  title: string;
  description: string;
};

export const resume: Resume[] = [
  {
    contents: [
      {
        title: "경력 기술서",
        desc: "경력과 프로젝트 경험, 기술 스택을 기술합니다",
        slug: "descriptions",
        button: "descriptions",
      },
      {
        title: "경력 사항",
        desc: "경력 사항과 주요 업무 내역을 기술합니다.",
        slug: "experiences",
        button: "experiences",
      },
      {
        title: "교육",
        desc: "학력 및 전공, 교육 과정에 대한 정보를 기술합니다.",
        slug: "educations",
        button: "educations",
      },
      {
        title: "자격증",
        desc: "보유 자격증을 기술합니다.",
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
        institution: "University of California, San Diego",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, San Diego",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, San Diego",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, San Diego",
        date: "2014.09 - 2018.06",
      },
      {
        school: "University of California, San Diego",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, San Diego",
        date: "2014.09 - 2018.06",
      },
    ],
    certificates: [
      {
        name: "정보처리기사",
        date: "2015-07-31",
        authority: "한국산업인력공단",
      },
      {
        name: "웹디자인기능사",
        date: "2014-06-27",
        authority: "한국산업인력공단",
      },
      {
        name: "GTQ포토샵1급",
        date: "2014-04-11",
        authority: "한국생산성본부",
      },
      {
        name: "사무자동화산업기사",
        date: "2008-11-10",
        authority: "한국산업인력공단",
      },
      {
        name: "컴퓨터활용능력2급",
        date: "2008-08-12",
        authority: "대한상공회의소",
      },
      {
        name: "OPIC(IM2)",
        date: "2024-06-01",
        authority: "ACTFLOPIc",
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

export type CertificateMeta = {
  meta: Meta;
  contents: Certificate[];
};

export type EducationsMeta = {
  meta: Meta;
  contents: Education[];
};

export type ExperiencesMeta = {
  meta: Meta;
  contents: Experience[];
};

export type DescriptionMeta = {
  meta: Meta;
  contents: Description[];
};

export const certificates: CertificateMeta[] = [
  {
    meta: {
      title: "자격증",
      description: "보유 자격증을 기술합니다.",
    },
    contents: [
      {
        name: "정보처리기사",
        date: "2015-07-31",
        authority: "한국산업인력공단",
      },
      {
        name: "웹디자인기능사",
        date: "2014-06-27",
        authority: "한국산업인력공단",
      },
      {
        name: "GTQ포토샵1급",
        date: "2014-04-11",
        authority: "한국생산성본부",
      },
      {
        name: "사무자동화산업기사",
        date: "2008-11-10",
        authority: "한국산업인력공단",
      },
      {
        name: "컴퓨터활용능력2급",
        date: "2008-08-12",
        authority: "대한상공회의소",
      },
      {
        name: "OPIC(IM2)",
        date: "2024-06-01",
        authority: "ACTFLOPIc",
      },
    ],
  },
];

export const educations: EducationsMeta[] = [
  {
    meta: {
      title: "교육",
      description: "학력 및 전공, 교육 과정에 대한 정보",
    },
    contents: [
      {
        school: "남서울대학교",
        degree: "보건행정학과",
        institution: "",
        date: "2006.03 - 2010.02",
      },
      {
        school: "부평여자고등학교",
        degree: "인문계",
        institution: "",
        date: "2003.03 - 2006.02",
      },
      {
        school: "Dublin City University Language School",
        degree: "",
        institution: "영어회화 과정 수료",
        date: "2018.10 - 2019.04",
      },
      {
        school: "인천중앙직업전문학교",
        degree: "",
        institution: "Eclipse를 활용한 안드로이드 프로그래밍(JAVA) 과정 수료",
        date: "2015.03 - 2015.07",
      },
      {
        school: "서울현대직업전문학교",
        degree: "",
        institution: "웹디자인을 위한 HTML+CSS3 과정 수료",
        date: "2014.01 - 2014.06",
      },
    ],
  },
];

export const experiences: ExperiencesMeta[] = [
  {
    meta: {
      title: "경력 사항",
      description: "경력 사항과 주요 업무",
    },
    contents: [
      {
        company: "엔씨소프트",
        title: "UI & FE Developer",
        date: "2021.03 - 2024.06",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "넥슨 코리아",
        title: "UI & FE Developer",
        date: "2019.10 - 2020.10",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "프리랜서",
        title: "Markup & UI Developer",
        date: "2017.10 - 2018.09",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "이니셔티브식스",
        title: "Markup & UI Developer",
        date: "2016.12 - 2017.10",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
      {
        company: "디앤디랩",
        title: "Markup & UI Developer",
        date: "2016.01 - 2016.08",
        description:
          "Developed and maintained Android applications for Samsung Smart TV. Worked on various projects including SmartThings, Samsung Health, and Samsung Pay.",
      },
    ],
  },
];

export const descriptions: DescriptionMeta[] = [
  {
    meta: {
      title: "경력 기술서",
      description: "경력과 프로젝트 경험, 기술 스택 소개",
    },
    contents: [
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
          "Jira 를 통한 작업 스케줄 관리",
        ],

        role: "마크업 및 UI 개발",
        skills:
          "시맨틱 태그 마크업, Styled-component, Pure css, React-select, React",
      },
      {
        title: "엔씨소프트 쓰론 앤 리버티 일정표 신규 페이지 UI 개발",
        date: "2023.10 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "반응형 디자인 적용",
          "다크모드 반영",
          "스크롤에 반응하는 UI 동작을 위한 Javascript 작업",
          "시멘틱 마크업 작업",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케줄 관리",
        ],
        role: "UI 개발",
        skills: "시맨틱 태그 마크업, tailwind css, pure css, Javascript, React",
      },
      {
        title: "엔씨소프트 리니지 W 사전 상세보기 팝업 내 공유하기 기능 개발",
        date: "2024.3 ~ 2 주(실작업 및 기능 디바이스 테스트 1 주 + 코드리뷰 반영 1 주)",
        performance: [
          "Mobile 일 경우, 공유하기(window.navigator.share api 사용)",
          "PC 일 경우, URL 복사(navigator.clipboard.writeText)로 분기하여 개발",
          "PC 및 Mobile 디바이스 테스트",
        ],
        role: "FE 개발",
        skills: "Javascript, React, Typescript",
      },
      {
        title:
          "엔씨소프트 퍼플런처 및 퍼플존 시세, 사전, 일정표, 랭킹 웹뷰 적용 관련 frontend 대응",
        date: "2024.2 ~ 2024.4 (상시 작업)",
        performance: [
          "퍼플런처(NC 자체플랫폼) 및 퍼플존(ingame) User-agent 분기에 따른 UI 작업",
          "퍼플런처, 퍼플존 웹뷰 적용 관렦 DOM 요소가 그려지는 기준 엘리먼트 달라지는 이슈 대응 (레이아웃, 스크롤, 스타일 등등",
        ],
        role: "UI 및 FE 개발",
        skills: "Javascript, React, Typescript, Pure css",
      },
      {
        title:
          "엔씨소프트 Lineagew 흑토끼 수집 이벤트 FE 개발 (공식 홈페이지에서 랜덤으로 등장하는 흑토끼 아이콘 수집이벤트 개발(수집한 흑토끼 아이콘 갯수만큼 인게임에서 사용할 수 있는 이벤트)",
        date: "2023.7 ~ 3 주(실작업 및 디바이스테스트 2 주 + 기획팀 및 디자인팀 피드백 반영 및 코드리뷰 1 주)",
        performance: [
          "브라우저 진입 시 랜덤 한 위치(getBoundingClientRect() 웹 API 사용) 및 시갂(Math.random() 웹 API 사용)에 흑토끼 아이콘 노출 UI & FE 개발",
          "흑토끼 아이콘 수집 상태 체크 로직 개발",
          "1. API 호출 로직",
          "* GET: 게임 유저별 아이콘 수집 상태 확인",
          "* POST: 아이콘 수집 카운트 증가",
          "2. 제약 조건",
          "* 하루에 수집 가능핚 아이콘 개수: 3 개",
          "* 이벤트 기갂 동안 총 수집 가능한 아이콘 개수: 50 개",
          "3. 기능 요구 사항",
          "* 아이콘 수집 상태에 따라 조건 분기",
          "* 케이스별 적젃핚 가이드 문구 출력 (ex: ‘1/3 수집하였습니다', '하루수집개수를 충족하였습니다’ 등)",
          "백엔드에서 제공하는 에러코드에 대응핚 에러핸들링 작업",
        ],
        role: "FE 개발",
        skills: "Javascript, Typescript, Pure css",
      },
      {
        title:
          "엔씨소프트 공식홈페이지 공통배너 고도화 및 예약 기능 개발(영상배너, 이미지배너, 토스트배너, 띠배너 등)",
        date: "2023.1 ~ 1 달(실작업 및 기능 디바이스 테스트 3 주 + 코드리뷰 반영 1 주)",
        performance: [
          "사내에서 제공하는 운영툴을 사용핚 스키마 생성 및 데이터 RWD 연동작업",
          "각 게임 IP 별 통일 된 공통배너 기능을 사용하기 위해 javascript 클래스를 사용핚 코드 개발(객체 생성)",
          "Date() 함수를 사용하여 공통배너 예약설정 기능 개발",
          "적용 및 사용 가이드 문서 작성",
        ],
        role: "FE 개발",
        skills: "Javascript, Typescript, Pure css",
      },
      {
        title: "엔씨소프트 아이온 신규 복귀 리뉴얼 페이지 UI 개발",
        date: "2023.10 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "시멘틱 마크업 작업",
          "반응형 디자인 적용",
          "스크롤에 반응하는 UI 동작을 위한 Javascript 작업",
          "Slick 플러그인 활용",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
        ],
        role: "마크업 및 UI 개발",
        skills: "Javascript, Typescript, Slick, Pure css",
      },
      {
        title: "엔씨소프트 공식홈페이지 유지보수",
        date: "2021.03 ~ 2024.06(상시)",
        performance: [
          "Spring 기반 RWD 유지보수",
          "Static 소스 유지보수",
          "엔씨소프트 자체 운영툴 활용 및 연동하여 유지보수",
          "Thymeleaf(타임리프)문법 활용",
          "디자인시스템가이드 회의 참여 및 가이드 작성",
          "공통 다크모드 IP 별 적용",
          "브랜드웹 페이지 UI 개발",
          "다국어(i18n) 적용",
          "Figma를 통한 기획팀, 디자인팀과의 협업",
          "Git 을 통한 FE, BE 협업",
          "Jira 를 통한 작업 스케줄 관리",
        ],
        role: "UI 및 FE 개발",
        skills: "Javascript, Typescript, react, Pure css, Thymeleaf",
      },
      {
        title:
          "넥슨 코리아 공식 홈페이지 클로저스, 천애명월도, v4 등 적응형 이벤트 페이지 PC, MOBILE UI 개발",
        date: "2019.10 ~ 2020.10 (상시 주 1 회 라이브)",
        performance: [
          "적응형 디자인 적용",
          "스크롤에 반응하는 UI 동작을 위핚 Javascript 작업",
          "Tweenmax.js 를 이용핚 시간차를 둔 텍스트 노출 작업",
          "Particle.js 를 활용한 눈, 반짝이 효과 작업",
          "Css animation 을 활용한 폭죽 효과 작업",
        ],
        role: "마크업 및 UI 개발",
        skills: "Javascript, Css animation, Tweenmax.js, Particle.js",
      },
      {
        title: "행정안전부 업무포탈 리뉴얼 프로젝트 PC UI 개발(프리랜서)",
        date: "2018.07 ~ 2018.09",
        performance: [
          "W3C 마크업 검증 서비스 사이트를 통해서 웹표준에 맞춰 작업",
          "Lnb 드롭다운 및 검색영역 스크립트 효과 적용",
          "기획, 디자인, Backend 협업",
        ],
        role: "마크업 및 UI 개발",
        skills: "Html, Css, Jquery",
      },
      {
        title:
          "한국마사회 말병원 전자의무기록(EMR) 적응형 프로젝트 PC, TABLET UI 개발(프리랜서)",
        date: "2017.10 ~ 2018.01",
        performance: [
          "웹표준 및 시멘틱 마크업 작업",
          "PC, TABLET 적응형 UI 개발",
          "기획, 디자인, Backend 협업",
        ],
        role: "마크업 및 UI 개발",
        skills: "Html, Css, Jquery",
      },
    ],
  },
];
