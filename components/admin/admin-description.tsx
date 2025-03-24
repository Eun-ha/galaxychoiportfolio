"use client";
import { Description } from "@/types/resume";

type Props = {
  slug: string;
  data: Description[];
};

export const AdminDescription = (props: Props) => {
  const { slug, data } = props;

  console.log(slug);
  console.log(data);

  return (
    <>
      <div>AdminDescription</div>
    </>
  );
};
