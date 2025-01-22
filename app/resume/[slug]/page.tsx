import { ResumeContents } from "@/components/resume-contents";
import { TitlesDescriptions } from "@/components/titles-descriptions";
import { fetchData } from "@/lib/utils";
import React from "react";

type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;
  const ApiUrl = process.env.API_URL;
  const data = await fetchData(`${ApiUrl}/api/resume/${slug}`);

  return (
    <main className="block w-full lg:w-[calc(100%-16px)] lg:ml-[16px]">
      <TitlesDescriptions category={slug} />
      <ResumeContents slug={slug} data={data} />
    </main>
  );
}
