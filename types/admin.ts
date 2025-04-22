import { Certificate, Education, Experience } from "@/types/resume";

export function isCertificate(
  project: Certificate | Education | Experience
): project is Certificate {
  return "name" in project && "date" in project && "authority" in project;
}

export function isEducation(
  project: Certificate | Education | Experience
): project is Education {
  return (
    "school" in project &&
    "degree" in project &&
    "institution" in project &&
    "date" in project
  );
}

export function isExperience(
  project: Certificate | Education | Experience
): project is Experience {
  return (
    "company" in project &&
    "title" in project &&
    "date" in project &&
    "description" in project
  );
}
