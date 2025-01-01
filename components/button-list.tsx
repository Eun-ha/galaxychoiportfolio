import { Button } from "./button";

export type Categories = {
  button: string;
  slug?: string;
  segment?: string;
};

// export default function ButtonList() {
//   return (
//     <section>
//       <Button />
//     </section>
//   );
// }

export const ButtonList = ({
  path,
  categories,
}: {
  path: string;
  categories: Categories[];
}) => {
  return (
    <div>
      {categories.map((category) => (
        <Button key={path + category.slug} category={category} path={path} />
      ))}
    </div>
  );
};
