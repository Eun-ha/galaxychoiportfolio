import { getAll } from "@/data/resume";
import { AsideButtonList } from "./aside-button-list";

export function ResumeAside() {
  const content = getAll();
  return (
    <>
      <AsideButtonList
        path="/resume"
        categories={[
          ...content.map((x) => ({
            button: x.button,
            slug: x.slug,
          })),
        ]}
      />
    </>
  );
}
