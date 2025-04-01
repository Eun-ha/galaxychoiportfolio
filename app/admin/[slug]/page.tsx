import {
  getCertificatesData,
  getDescriptionsData,
  getEducationsData,
  getExperiencesData,
} from "@/backend/resume-actions";
import { AdminContents } from "@/components/admin/admin-contents";
import { CreateData } from "@/components/admin/buttons";
import { BoundaryButton } from "@/components/ui/boundary-button";
import {
  Certificate,
  Description,
  Education,
  Experience,
} from "@/types/resume";

type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;

  let data: Description[] | Education[] | Experience[] | Certificate[] = [];

  if (slug === "certificates") {
    data = await getCertificatesData();
  } else if (slug === "descriptions") {
    data = await getDescriptionsData();
  } else if (slug === "experiences") {
    data = await getExperiencesData();
  } else if (slug === "educations") {
    data = await getEducationsData();
  }

  return (
    <div>
      <div>
        <BoundaryButton>
          <CreateData slug={slug} />
        </BoundaryButton>
      </div>
      <AdminContents slug={slug} data={data} />
    </div>
  );
}
