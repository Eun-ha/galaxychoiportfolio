import { AsideButtonList } from "./aside-button-list";
import { Aside, asideButtons } from "@/data/resume";

export async function ResumeAside() {
  console.log("resume-aside-server");

  return (
    <>
      <AsideButtonList
        path="/resume"
        categories={[
          ...asideButtons.map((x: Aside) => ({
            button: x.button,
            slug: x.slug,
          })),
        ]}
      />
    </>
  );
}
