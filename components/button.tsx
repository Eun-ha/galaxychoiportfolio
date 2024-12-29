import { Resume } from "@/data/resume";

export default function Button({ data }: { data: Resume }) {
  return (
    <>
      {data.buttonName.map((data, index) => (
        <button key={index}>{data}</button>
      ))}
    </>
  );
}
