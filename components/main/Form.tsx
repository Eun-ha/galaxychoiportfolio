"use client";

import { sendEmail } from "@/lib/formAction";
import { useActionState, useEffect, useState } from "react";
import { BoundaryFrom } from "../ui/boundary-form";
import { Button } from "../button";

export default function Form() {
  const [actionState, formAction, isPending] = useActionState(sendEmail, null);
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
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름을 적어주세요."
            />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 적어주세요."
            />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="textarea">문의 내용</label>
            <textarea
              id="textarea"
              name="textarea"
              placeholder="문의 내용을 적어주세요."
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
        {isPending ? "대기중..." : "전송"}
      </Button>
    </form>
  );
}
