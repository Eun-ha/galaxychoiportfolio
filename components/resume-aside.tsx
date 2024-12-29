import { Resume } from "@/data/resume";
import ButtonList from "./button-list";
import { TitlesDescs } from "./titles-descs";

export const ResumeAside = ({ data }: { data: Resume }) => {
  return (
    <aside className="bg-orange-400">
      <TitlesDescs data={data} theme="resume" />
      <ButtonList data={data} />
    </aside>
  );
};
