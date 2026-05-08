import { revalidatePath, revalidateTag } from "next/cache";

export const CACHE_TAGS = {
  main: "main",
  skill: "skill",
  work: "work",
  resume: {
    all: "resume",
    descriptions: "resume:descriptions",
    certificates: "resume:certificates",
    experiences: "resume:experiences",
    educations: "resume:educations",
  },
} as const;

export type ResumeCacheTag =
  (typeof CACHE_TAGS.resume)[keyof typeof CACHE_TAGS.resume];

/**
 * 데이터 변경 시 호출할 무효화 유틸.
 * 관리자/쓰기 액션에서 도메인에 맞게 tag + path 를 함께 무효화한다.
 */
export function revalidateDomainCache(domain: keyof typeof CACHE_TAGS) {
  if (domain === "main") {
    revalidateTag(CACHE_TAGS.main);
    revalidatePath("/");
    return;
  }

  if (domain === "skill") {
    revalidateTag(CACHE_TAGS.skill);
    revalidatePath("/");
    return;
  }

  if (domain === "work") {
    revalidateTag(CACHE_TAGS.work);
    revalidatePath("/work");
    return;
  }

  // resume 도메인
  revalidateTag(CACHE_TAGS.resume.all);
  revalidateTag(CACHE_TAGS.resume.descriptions);
  revalidateTag(CACHE_TAGS.resume.certificates);
  revalidateTag(CACHE_TAGS.resume.experiences);
  revalidateTag(CACHE_TAGS.resume.educations);
  revalidatePath("/resume");
}
