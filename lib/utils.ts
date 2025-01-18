import {
  getDescriptions,
  getEducations,
  getExperiences,
  getSkills,
} from "@/data/resume";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getData(type: string) {
  switch (type) {
    case "descriptions":
      return getDescriptions();
    case "educations":
      return getEducations();
    case "experiences":
      return getExperiences();
    case "skills":
      return getSkills();
    default:
      return [];
  }
}
