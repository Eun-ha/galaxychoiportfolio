"use client";

import Link from "next/link";
import { deleteCertificate } from "@/backend/resume-actions";

type PropsData = {
  slug: string;
};
export function CreateData(props: PropsData) {
  const { slug } = props;
  return (
    <Link href={`/admin/${slug}/create`} aria-label="Link to create form">
      Create
    </Link>
  );
}

type Props = {
  slug: string;
  id: string;
};
export function EditData(props: Props) {
  const { slug, id } = props;
  return (
    <Link href={`/admin/${slug}/${id}/edit`} aria-label={`Link to ${id}`}>
      Edit
    </Link>
  );
}

export function DeleteData({ id }: { id: string }) {
  const deleteProjectWithId = async () => {
    if (window.confirm("이 데이터를 정말 삭제하시겠습니까?")) {
      await deleteCertificate(id);
    }
  };

  return <button onClick={deleteProjectWithId}>Delete</button>;
}
