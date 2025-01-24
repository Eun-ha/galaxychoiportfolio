"use client";

import { sendEmail } from "@/lib/formAction";
import { useActionState, useEffect, useState } from "react";

export default function Form() {
  const [actionState, formAction] = useActionState(sendEmail, null);
  const [isErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    actionState !== null ? setErrorMessage(true) : setErrorMessage(false);
  }, [actionState]);

  return (
    <form action={formAction}>
      <div className="w-full">
        <div className="w-full flex mb-3">
          <label
            htmlFor="name"
            className="flex-shrink-0 min-w-[80px] text-left"
          >
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 적어주세요."
            className="w-full flex-shrink h-[45px] indent-[15px]"
          />
        </div>
        <div className="w-full flex mb-3">
          <label
            htmlFor="email"
            className="flex-shrink-0 min-w-[80px] text-left"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 적어주세요."
            className="w-full flex-shrink h-[45px] indent-[15px]"
          />
        </div>
        <div className="w-full flex mb-3">
          <label
            htmlFor="textarea"
            className="flex-shrink-0 min-w-[80px] text-left"
          >
            문의 내용
          </label>
          <textarea
            id="textarea"
            name="textarea"
            placeholder="문의 내용을 적어주세요."
            className="w-full flex-shrink h-[300px] indent-[15px]"
          />
        </div>
      </div>
      {isErrorMessage ? (
        <span className="block text-point-red">{actionState}</span>
      ) : (
        ""
      )}

      <button
        type="submit"
        className="text-base inline-block mt-6 p-2 bg-slate-500"
      >
        전송
      </button>
    </form>
  );
}
