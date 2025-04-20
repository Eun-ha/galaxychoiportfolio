"use client";
import { Description } from "@/types/resume";

type Props = {
  slug: string;
  data: Description[];
};

export const AdminDescription = (props: Props) => {
  const { slug, data } = props;

  return (
    <>
      <div>AdminDescription</div>
    </>
  );
};
