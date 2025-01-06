import { getDescriptions } from "@/data/resume";
import { Boundary } from "./boundary";

export function ResumeDescription() {
  const content = getDescriptions();

  return (
    <section>
      {content.map((x, index) => (
        <article key={index}>
          <Boundary>
            <h3>-업무명: {x.title}</h3>
            <p>-기간: {x.date}</p>
            <ul>
              -성과:
              {x.performance.map((y) => (
                <li>{y}</li>
              ))}
            </ul>
            <p>-역할: {x.role}</p>
            <p>-기술: {x.skills}</p>
          </Boundary>
        </article>
      ))}
    </section>
  );
}
