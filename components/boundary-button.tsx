import clsx from "clsx";
import React from "react";

interface Category {
  children: React.ReactNode;
}

export const BoundaryButton = (Props: Category) => {
  const { children } = Props;

  return (
    <div
      className={clsx(
        "inline-block mt-4 [&_*]:inline-block [&_*]:px-4 [&_*]:py-1 [&_*]:no-underline [&_*]:bg-bg-active [&_*]:rounded-lg hover:[&_*]:bg-bg-hover [&_*]:ml-2 first:[&_*]:ml-0",
        {}
      )}
    >
      {children}
    </div>
  );
};
