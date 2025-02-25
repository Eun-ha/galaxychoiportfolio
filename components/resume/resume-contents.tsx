import { Suspense } from "react";
import {
  CertificateMeta,
  EducationsMeta,
  ExperiencesMeta,
  DescriptionMeta,
} from "@/data/resume";
import clsx from "clsx";
import { notFound } from "next/navigation";
import { SkeletonCard } from "../ui/skeleton-card";
import { ResumeEducation } from "./resume-education";
import { ResumeExperience } from "./resume-experience";
import { ResumeCertificate } from "./resume-certificate";
import { ResumeDescription } from "./resume-description";

interface Props {
  slug?: string;
  data:
    | DescriptionMeta[]
    | EducationsMeta[]
    | ExperiencesMeta[]
    | CertificateMeta[];
}

export const ResumeContents = (props: Props) => {
  const { slug, data } = props;
  return (
    <section className={clsx("mb-2 lg:mb-4")}>
      {slug === "educations" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeEducation data={data as EducationsMeta[]} />
        </Suspense>
      ) : slug === "experiences" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeExperience data={data as ExperiencesMeta[]} />
        </Suspense>
      ) : slug === "certificates" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeCertificate data={data as CertificateMeta[]} />
        </Suspense>
      ) : slug === "descriptions" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeDescription data={data as DescriptionMeta[]} />
        </Suspense>
      ) : (
        notFound()
      )}
    </section>
  );
};
