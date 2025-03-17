import { Suspense } from "react";
import {
  Certificate,
  Education,
  Experience,
  Description,
} from "@/types/resume";
import clsx from "clsx";
import { notFound } from "next/navigation";
import { SkeletonCard } from "../ui/skeleton-card";
import { ResumeEducation } from "./resume-education";
import { ResumeExperience } from "./resume-experience";
import { ResumeCertificate } from "./resume-certificate";
import { ResumeDescription } from "./resume-description";

type Props = {
  slug: string;
  data: Description[] | Education[] | Experience[] | Certificate[];
};

export const ResumeContents = (props: Props) => {
  const { slug, data } = props;
  return (
    <section className={clsx("mb-2 lg:mb-4")}>
      {slug === "educations" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeEducation data={data as Education[]} />
        </Suspense>
      ) : slug === "experiences" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeExperience data={data as Experience[]} />
        </Suspense>
      ) : slug === "certificates" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeCertificate data={data as Certificate[]} />
        </Suspense>
      ) : slug === "descriptions" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeDescription data={data as Description[]} />
        </Suspense>
      ) : (
        notFound()
      )}
    </section>
  );
};
