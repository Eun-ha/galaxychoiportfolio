"use client";
import { Education } from "@/types/resume";

type Props = {
  slug: string;
  data: Education[];
};

export const AdminEducation = (props: Props) => {
  const { slug, data } = props;

  console.log(slug);
  console.log(data);

  return (
    <>
      <div>AdminEducation</div>
    </>
  );
};
