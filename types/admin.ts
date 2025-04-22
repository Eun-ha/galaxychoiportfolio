import { Certificate, Education } from "@/types/resume";

export function isCertificate(
  project: Certificate | Education
): project is Certificate {
  return "name" in project && "date" in project && "authority" in project;
}

export function isEducation(
  project: Certificate | Education
): project is Education {
  return (
    "school" in project &&
    "degree" in project &&
    "institution" in project &&
    "date" in project
  );
}
