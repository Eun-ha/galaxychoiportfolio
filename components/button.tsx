import { getButtonTitle } from "@/data/resume";
import Link from "next/link";

export default function Button() {
  const title = getButtonTitle();
  return (
    <>
      {title.map((title, index) => (
        <Link className="block" href={`/resume/${title}`} key={index}>
          {title}
        </Link>
      ))}
    </>
  );
}
