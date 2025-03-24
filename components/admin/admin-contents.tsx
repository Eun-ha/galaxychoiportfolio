import { Suspense } from "react";
import {
  Certificate,
  Education,
  Experience,
  Description,
} from "@/types/resume";
import clsx from "clsx";
import { notFound } from "next/navigation";
import { SkeletonCard } from "../ui/skeleton-card";
import { AdminCertificate } from "./admin-certificate";
import { AdminDescription } from "./admin-description";
import { AdminExperience } from "./admin-experience";
import { AdminEducation } from "./admin-education";

type Props = {
  slug: string;
  data: Description[] | Education[] | Experience[] | Certificate[];
};

export const AdminContents = (props: Props) => {
  const { slug, data } = props;
  return (
    <section className={clsx("mb-2 lg:mb-4")}>
      {slug === "educations" ? (
        <Suspense fallback={<SkeletonCard />}>
          <AdminEducation slug={slug} data={data as Education[]} />
        </Suspense>
      ) : slug === "experiences" ? (
        <Suspense fallback={<SkeletonCard />}>
          <AdminExperience slug={slug} data={data as Experience[]} />
        </Suspense>
      ) : slug === "certificates" ? (
        <Suspense fallback={<SkeletonCard />}>
          <AdminCertificate slug={slug} data={data as Certificate[]} />
        </Suspense>
      ) : slug === "descriptions" ? (
        <Suspense fallback={<SkeletonCard />}>
          <AdminDescription slug={slug} data={data as Description[]} />
        </Suspense>
      ) : (
        notFound()
      )}
    </section>
  );
};
