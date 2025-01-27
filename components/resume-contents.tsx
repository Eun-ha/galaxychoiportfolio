import { Suspense } from "react";
import { Description, Education, Experience, Certificate } from "@/data/resume";
import clsx from "clsx";
import { ResumeEducation } from "./resume-education";
import { ResumeExperience } from "./resume-experience";
import { ResumeCertificate } from "./resume-certificate";
import { ResumeDescription } from "./resume-description";
import { notFound } from "next/navigation";

interface Props {
  slug: string;
  data: Description[] | Education[] | Experience[] | Certificate[];
}

export const ResumeContents = (props: Props) => {
  const { slug, data } = props;
  return (
    <section>
      <article className={clsx("mb-2 lg:mb-4")}>
        {slug === "educations" ? (
          <Suspense fallback={<div>Education 로딩중...</div>}>
            <ResumeEducation data={data as Education[]} />
          </Suspense>
        ) : slug === "experiences" ? (
          <Suspense fallback={<div>Experience 로딩중...</div>}>
            <ResumeExperience data={data as Experience[]} />
          </Suspense>
        ) : slug === "certificates" ? (
          <Suspense fallback={<div>Certificate 로딩중...</div>}>
            <ResumeCertificate data={data as Certificate[]} />
          </Suspense>
        ) : slug === "descriptions" ? (
          <Suspense fallback={<div>Descriptions 로딩중...</div>}>
            <ResumeDescription data={data as Description[]} />
          </Suspense>
        ) : (
          notFound()
        )}
      </article>
    </section>
  );
};
