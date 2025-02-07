export type Main = {
  title: string;
  content1: string;
  content2: string;
  description: string;
  button: string;
  path: string;
  alt: string;
};

export type Skill = {
  color: number;
  skills: number;
  name: string;
  angle: number;
};

export type Home = {
  home: Main[];
  skills: Skill[];
};

export const home: Home[] = [
  {
    home: [
      {
        title: "안녕하세요! 방문해주셔서 감사합니다 :)",
        content1: "저는 6년차 UI & FE 개발자 최은하입니다",
        content2: "I'm a front end engineer",
        description:
          "저는 쇼핑몰 에이전시, SI 프로젝트 에이전시, 프리랜서, 게임회사들에서 UI & FE 개발을 담당 하였습니다. Javascript 및 그 기반으로 하는 reactjs, nextjs, typescript와 같은 플러그인 및 프레임워크 들을 다루어 본 경험이 있으며, tailwind, styled-compoment, scss 등을 사용해보았습니다. 현재는 좀더 정교한 UI 컴포넌트 단위 개발을 위한 storyboard와 웹 개발의 성능 측정, 최적화, SEO등을 좀더 효율적으로 관리할수 있는 Nextjs 공부를 꾸준히 하고 있습니다.",
        button: "Download Resume",
        path: "01",
        alt: "아이슬란드 다이아몬드 비치에서 빙하 조각을 들고 웃고 있는 사진 입니다.",
      },
      {
        title: "About Me",
        content1: "Let me introduce myself",
        content2: "저에 대해서 소개합니다.",
        description:
          "저는 새로운 것을 배우는 것을 좋아합니다. 수영은 다이빙까지 마스터 하였고, 최근 새로 시작한 스쿼시는 현재 단계별(forehand, backhand)로 기술 및 자세들을 배우면서 실력을 키워가고 있습니다. 평소에도 시간이 날때마다 영어회화공부와 FE 개발관련 토이프로젝트도 만들고 있습니다. 수영, 스쿼시, 영어회화, FE 개발 공부를 하면서 느낀 공통점은 그 실력이 쌓일수록 이 각각의 관심분야들의 관점을 넓히게 되고 그 안에서 새로운 통찰력을 얻을 수 있다는 것입니다. 그 매력 때문에 어떤 새로운 분야든 기회가 될 때 마다 꾸준히 관심을 가지고 도전하며 포기하지 않고 깊이 있게 탐구하고 있습니다.",
        button: "Read More",
        path: "02",
        alt: "사하라 사막 투어에서 브이를 하고 있는 사진 입니다.",
      },
    ],
    skills: [
      {
        color: 1,
        skills: 80,
        name: "HTML5",
        angle: 280,
      },
      {
        color: 2,
        skills: 80,
        name: "CSS3",
        angle: 280,
      },
      {
        color: 3,
        skills: 80,
        name: "SASS",
        angle: 280,
      },
      {
        color: 4,
        skills: 70,
        name: "JavaScript",
        angle: 270,
      },
      {
        color: 5,
        skills: 70,
        name: "React",
        angle: 270,
      },
      {
        color: 1,
        skills: 70,
        name: "Nextjs",
        angle: 270,
      },
      {
        color: 2,
        skills: 65,
        name: "TypeScript",
        angle: 265,
      },
      {
        color: 3,
        skills: 45,
        name: "SQL",
        angle: 245,
      },
      {
        color: 4,
        skills: 75,
        name: "Figma",
        angle: 275,
      },
      {
        color: 5,
        skills: 75,
        name: "Git",
        angle: 275,
      },
    ],
  },
];
