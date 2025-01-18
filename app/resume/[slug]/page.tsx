import { ResumeContents } from "@/components/resume-contents";
import { TitlesDescriptions } from "@/components/titles-descriptions";
import { Suspense } from "react";

type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;
  return (
    <main className="block w-full lg:w-[calc(100%-16px)] lg:ml-[16px]">
      <TitlesDescriptions category={slug} />
      <Suspense fallback={<p>서스펜스 로딩중입니다</p>}>
        <ResumeContents category={slug} />
      </Suspense>
    </main>
  );
}
