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
        title: "Hello, It's Me",
        content1: "EunHa Choi",
        content2: "and I'm a front end engineer",
        description:
          "heLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametlo",
        button: "Download Resume",
        path: "01",
        alt: "메인 이미지 1",
      },
      {
        title: "About Me",
        content1: "Let me introduce myself",
        content2: "and I'm a front end engineer",
        description:
          "heLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametlo",
        button: "Read More",
        path: "02",
        alt: "메인 이미지 2",
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
        skills: 70,
        name: "JavaScript",
        angle: 270,
      },
      {
        color: 4,
        skills: 70,
        name: "React",
        angle: 270,
      },
      {
        color: 5,
        skills: 70,
        name: "Nextjs",
        angle: 270,
      },
      {
        color: 1,
        skills: 45,
        name: "SQL",
        angle: 245,
      },
    ],
  },
];
