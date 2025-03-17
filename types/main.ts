export type Main = {
  title: string;
  content1: string;
  content2: string;
  description: string;
  description2?: string;
  description3?: string;
  button: string;
  path: string;
  alt: string;
  url?: string;
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
