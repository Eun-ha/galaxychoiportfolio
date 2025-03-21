"use client";

import Link from "next/link";
import { deleteCertificate } from "@/backend/resume-actions";

export function CreateData() {
  return (
    <Link href="/admin/create" aria-label="Link to create form">
      Create
    </Link>
  );
}

export function EditData({ id }: { id: string }) {
  const url = id;
  return (
    <Link href={`/admin/${url}/edit`} aria-label={`Link to ${url}`}>
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
