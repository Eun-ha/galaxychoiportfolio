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
import { ResumeDescription } from "./resume-description";
import React from "react";
import { ResumeCertificate } from "./resume-certificate";

type Props = {
  slug: string;
  data: Description[] | Education[] | Experience[] | Certificate[];
  allDesc?: Description[];
};

export const ResumeContents = (props: Props) => {
  const { slug, data, allDesc } = props;
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
      ) : slug === "descriptions" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeDescription
            data={data as Description[]}
            allDesc={allDesc as Description[]}
          />
        </Suspense>
      ) : slug === "certificates" ? (
        <Suspense fallback={<SkeletonCard />}>
          <ResumeCertificate data={data as Certificate[]} />
        </Suspense>
      ) : (
        notFound()
      )}
    </section>
  );
};
