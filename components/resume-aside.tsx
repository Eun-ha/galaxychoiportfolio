import { getButtonTitle } from "@/data/resume";
import { ButtonList } from "./button-list";

// export function ResumeAside() {
//   return (
//     <aside className="bg-orange-400">
//       <TitlesDescriptions category="resume" />
//       <ButtonList />
//     </aside>
//   );
// }

export function ResumeAside() {
  const buttons = getButtonTitle();
  return (
    <div>
      <ButtonList
        path="/resume"
        categories={[
          ...buttons.map((x) => ({
            button: x.button,
            slug: x.slug,
          })),
        ]}
      />
    </div>
  );
}
