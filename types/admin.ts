import {
  Certificate,
  Description,
  Education,
  Experience,
} from "@/types/resume";
import { Work } from "@/types/work";

export function isCertificate(
  project: Certificate | Education | Experience | Description | Work
): project is Certificate {
  return "name" in project && "date" in project && "authority" in project;
}

export function isEducation(
  project: Certificate | Education | Experience | Description | Work
): project is Education {
  return (
    "school" in project &&
    "degree" in project &&
    "institution" in project &&
    "date" in project
  );
}

export function isExperience(
  project: Certificate | Education | Experience | Description | Work
): project is Experience {
  return (
    "company" in project &&
    "title" in project &&
    "date" in project &&
    "description" in project
  );
}

export function isDescription(
  project: Certificate | Education | Experience | Description | Work
): project is Description {
  return (
    "title" in project &&
    "date" in project &&
    "performance" in project &&
    "role" in project &&
    "skills" in project
  );
}

export function isWork(
  project: Certificate | Education | Experience | Description | Work
): project is Work {
  return (
    "title" in project &&
    "description" in project &&
    "skill" in project &&
    "path" in project &&
    "url" in project &&
    "download" in project &&
    "git" in project &&
    "index" in project
  );
}
