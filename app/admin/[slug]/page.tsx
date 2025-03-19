import React from "react";

type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;

  return <div>{slug}</div>;
}
