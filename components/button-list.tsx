import { Button } from "./button";

export type Categories = {
  button: string;
  slug?: string;
  segment?: string;
};

export const ButtonList = ({
  path,
  categories,
}: {
  path: string;
  categories: Categories[];
}) => {
  return (
    <div className="bg-rose-900">
      {categories.map((category) => (
        <Button key={path + category.slug} category={category} path={path} />
      ))}
    </div>
  );
};
