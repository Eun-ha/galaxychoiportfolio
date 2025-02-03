export type Main = {
  title: string;
  content1: string;
  content2: string;
  description: string;
  button: string;
  image: string;
  alt: string;
};

export const main: Main[] = [
  {
    title: "Hello, It's Me",
    content1: "EunHa Choi",
    content2: "and I'm a front end engineer",
    description:
      "heLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametlo",
    button: "Download Resume",
    image: "/images/main/01.jpeg",
    alt: "메인 이미지 1",
  },
  {
    title: "About Me",
    content1: "Let me introduce myself",
    content2: "and I'm a front end engineer",
    description:
      "heLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametlo",
    button: "Read More",
    image: "/images/main/02.jpeg",
    alt: "메인 이미지 2",
  },
];

export type skill = {
  color: number;
  skills: number;
  name: string;
  angle: number;
};

export const skills: skill[] = [
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
];
