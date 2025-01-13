export type Home = {
  main: string[];
};

export const home: Home[] = [
  {
    main: [
      "Hello, It's Me",
      "EunHa Choi",
      "and I'm a front end engineer",
      "and I'm a front end engineer, and I'm a front end engineer, and I'm a front end engineer, and I'm a front end engineer, and I'm a front end engineer and I'm a front end engineer, and I'm a front end engineer, and I'm a front end engineer,and I'm a front end engineer",
      "Download CV",
      "/images/works/01.png",
    ],
  },
];

export function getMain(): string[] {
  return home.flatMap((contents) => contents.main);
}
