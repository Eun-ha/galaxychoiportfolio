import {
  CertificateMeta,
  DescriptionMeta,
  EducationsMeta,
  ExperiencesMeta,
} from "@/data/resume";

interface Props {
  data:
    | DescriptionMeta[]
    | ExperiencesMeta[]
    | EducationsMeta[]
    | CertificateMeta[];
}

export const TitlesDescriptions = (props: Props) => {
  const { title, description } = props.data[0].meta;

  return (
    <section className="my-5 lg:mt-0">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-text-emphasis">{description}</p>
    </section>
  );
};
