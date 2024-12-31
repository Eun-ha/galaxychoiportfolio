import ButtonList from "./button-list";
import { TitlesDescriptions } from "./titles-descriptions";

export function ResumeAside() {
  return (
    <aside className="bg-orange-400">
      <TitlesDescriptions category="resume" />
      <ButtonList />
    </aside>
  );
}
