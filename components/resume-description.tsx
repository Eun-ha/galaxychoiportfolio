import { getDescriptions } from "@/data/resume";

export function ResumeDescription() {
  const content = getDescriptions();
  return (
    <section>
      {content.map((x, index) => (
        <article key={index} className="bg-rose-200">
          <h3>{x.title}</h3>
          <p>{x.date}</p>
          <p>{x.performance}</p>
          <p>{x.role}</p>
          <p>{x.skills}</p>
        </article>
      ))}
    </section>
  );
}
