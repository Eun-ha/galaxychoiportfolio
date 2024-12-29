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

export type Resume = {
  resumeTitle: string;
  resumeDesc: string;
  experiencesTitle: string;
  experiencesDesc: string;
  educationsTitle: string;
  educationsDesc: string;
  skillsTitle: string;
  skillsDesc: string;
  buttonName: string[];
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
};

const resume: Resume = {
  resumeTitle: "메인 레쥬메 타이틀 입니다.",
  resumeDesc: "메인 레쥬메 설명 입니다.",
  experiencesTitle: "경험 타이틀 입니다.",
  experiencesDesc: "경험 설명 입니다.",
  educationsTitle: "교육 타이틀 입니다.",
  educationsDesc: "교육 설명 입니다.",
  skillsTitle: "스킬 타이틀 입니다.",
  skillsDesc: "스킬 설명 입니다.",
  buttonName: ["Experience", "Education", "Skills"],
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
  ],
  educations: [
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
      name: "C++",
      level: 3,
    },
    {
      name: "Python",
      level: 3,
    },
    {
      name: "JavaScript",
      level: 3,
    },
    {
      name: "React",
      level: 3,
    },
    {
      name: "Node.js",
      level: 3,
    },
    {
      name: "HTML/CSS",
      level: 3,
    },
    {
      name: "SQL",
      level: 3,
    },
    {
      name: "Git",
      level: 3,
    },
    {
      name: "Docker",
      level: 3,
    },
    {
      name: "Kubernetes",
      level: 3,
    },
    {
      name: "AWS",
      level: 3,
    },
  ],
};

export default resume;
