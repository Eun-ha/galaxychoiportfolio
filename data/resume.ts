import { Aside, TitleDescription } from "@/types/resume";

export const asideButtons: Aside[] = [
  {
    slug: "descriptions",
    button: "descriptions",
  },
  {
    slug: "experiences",
    button: "experiences",
  },
  {
    slug: "educations",
    button: "educations",
  },
  {
    slug: "certificates",
    button: "certificates",
  },
];

export const TitleAndDescription: TitleDescription[] = [
  {
    slug: "descriptions",
    title: "경력 기술서",
    description: "경력과 프로젝트 경험, 기술 스택을 기술합니다.",
  },
  {
    slug: "experiences",
    title: "경력 사항",
    description: "경력 사항과 주요 업무 내역을 기술합니다.",
  },
  {
    slug: "educations",
    title: "교육",
    description: "학력 및 전공, 수료 교육 과정에 대한 정보를 기술합니다.",
  },
  {
    slug: "certificates",
    title: "자격증",
    description: "보유 자격증을 기술합니다.",
  },
];
