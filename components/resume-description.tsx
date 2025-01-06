import { getDescriptions } from "@/data/resume";
import { Boundary } from "./boundary";

export function ResumeDescription() {
  const content = getDescriptions();
  return (
    <section>
      {content.map((x, index) => (
        <article key={index}>
          <Boundary>
            <h3>{x.title}</h3>
            <p>{x.date}</p>
            <p>{x.performance}</p>
            <p>{x.role}</p>
            <p>{x.skills}</p>
          </Boundary>
        </article>
      ))}
    </section>
  );
}
