import { Boundary } from "@/components/boundary";
import { ResumeContents } from "@/components/resume-contents";
import { TitlesDescriptions } from "@/components/titles-descriptions";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = await params;
  return (
    <main className="block">
      <TitlesDescriptions category={id.slug} />
      <ResumeContents category={id.slug} />
    </main>
  );
}
