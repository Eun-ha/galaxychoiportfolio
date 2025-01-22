import { ResumeCertificate } from "@/components/resume-certificate";
import { ResumeDescription } from "@/components/resume-description";
import { ResumeEducation } from "@/components/resume-education";
import { ResumeExperience } from "@/components/resume-experience";
import { TitlesDescriptions } from "@/components/titles-descriptions";
import { Certificate, Description, Education, Experience } from "@/data/resume";
import { fetchData } from "@/lib/utils";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;
  const data = await fetchData(`http://localhost:3001/api/resume/${slug}`);

  return (
    <main className="block w-full lg:w-[calc(100%-16px)] lg:ml-[16px]">
      <TitlesDescriptions category={slug} />
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
    </main>
  );
}
