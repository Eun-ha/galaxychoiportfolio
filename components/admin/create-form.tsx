"use client";

import { createCertificate } from "@/backend/resume-actions";
import { Button } from "@/components/button";
import { BoundaryFrom } from "@/components/ui/boundary-form";
import { useActionState, useEffect, useState } from "react";

export default function CreateCertificateForm() {
  const initialState = { errors: {}, message: "" };
  const [actionState, formAction, isPending] = useActionState(
    createCertificate,
    initialState
  );
  const [isErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (actionState !== null) {
      setErrorMessage(true);

      const timer = setTimeout(() => {
        setErrorMessage(false);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setErrorMessage(false);
    }
  }, [actionState]);

  return (
    <form action={formAction}>
      <div className="w-full">
        <BoundaryFrom>
          <div className="w-full flex mb-3">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" placeholder="name" />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="date">date</label>
            <input type="text" id="date" name="date" placeholder="date" />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="authority">authority</label>
            <input
              type="text"
              id="authority"
              name="authority"
              placeholder="authority"
            />
          </div>
        </BoundaryFrom>
      </div>
      {isErrorMessage ? (
        <span className="block text-point-red mb-3">
          {typeof actionState === "string" ? actionState : actionState?.message}
        </span>
      ) : (
        ""
      )}
      <Button type="submit" aria-label="폼 전송 버튼" aria-disabled={isPending}>
        {isPending ? "대기중..." : "완료"}
      </Button>
    </form>
  );
}
