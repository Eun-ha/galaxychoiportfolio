"use client";
import { Experience } from "@/types/resume";

type Props = {
  slug: string;
  data: Experience[];
};

export const AdminExperience = (props: Props) => {
  const { slug, data } = props;

  console.log(slug);
  console.log(data);

  return (
    <>
      <div>AdminExperience</div>
    </>
  );
};
