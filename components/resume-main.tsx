import { Resume } from "@/data/resume";
import ResumeSection from "./resume-section";
import { TitlesDescs } from "./titles-descs";

export default function ResumeMain({ data }: { data: Resume }) {
  return (
    <main className="bg-orange-600">
      <TitlesDescs data={data} theme="experiences" />
      <ResumeSection />
    </main>
  );
}
