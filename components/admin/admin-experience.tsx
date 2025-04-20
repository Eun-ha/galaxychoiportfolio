"use client";
import { Experience } from "@/types/resume";

type Props = {
  slug: string;
  data: Experience[];
};

export const AdminExperience = (props: Props) => {
  const { slug, data } = props;

  return (
    <>
      <div>AdminExperience</div>
    </>
  );
};
