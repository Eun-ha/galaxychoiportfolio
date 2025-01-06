import { ResumeContents } from "@/components/resume-contents";
import { TitlesDescriptions } from "@/components/titles-descriptions";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = await params;
  return (
    <main className="block w-full lg:w-[calc(100%-16px)] lg:ml-[16px]">
      <TitlesDescriptions category={id.slug} />
      <ResumeContents category={id.slug} />
    </main>
  );
}
