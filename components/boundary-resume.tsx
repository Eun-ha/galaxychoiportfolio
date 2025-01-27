import clsx from "clsx";
import React from "react";

interface Category {
  children: React.ReactNode;
}

export const BoundaryResume = (Props: Category) => {
  const { children } = Props;

  return (
    <div
      className={clsx(
        "border border-border rounded-lg [&_h3]:p-4 [&_h3]:border-b [&_h3]:border-border [&_h3]:font-medium [&_h3]:bg-bg-emphasis [&_h4]:font-medium [&_div]:m-4 [&_div]:border-b [&_div]:border-border [&_div]:pb-4 last:[&_div]:pb-0 last:[&_div]:border-b-0 [&_li]:text-text-emphasis [&_p]:text-text-emphasis",
        {}
      )}
    >
      {children}
    </div>
  );
};
