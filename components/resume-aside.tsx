import { getAll } from "@/data/resume";
import { ButtonList } from "./button-list";

export function ResumeAside() {
  const content = getAll();
  return (
    <div className="bg-rose-500">
      <ButtonList
        path="/resume"
        categories={[
          ...content.map((x) => ({
            button: x.button,
            slug: x.slug,
          })),
        ]}
      />
    </div>
  );
}
