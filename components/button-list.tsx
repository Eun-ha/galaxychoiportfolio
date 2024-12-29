import { Resume } from "@/data/resume";
import Button from "./button";

export default function ButtonList({ data }: { data: Resume }) {
  return (
    <section>
      <Button data={data} />
    </section>
  );
}
