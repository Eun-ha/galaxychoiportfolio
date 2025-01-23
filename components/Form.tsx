"use client";

import { sendEmail } from "@/lib/formAction";
import { useActionState } from "react";

export default function Form() {
  const [actionState, formAction] = useActionState(sendEmail, null);

  console.log("폼=======");
  console.log(typeof actionState);
  console.log(actionState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name">이름: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 적어주세요."
          />
        </div>
        <div>
          <label htmlFor="email">이메일: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 적어주세요."
          />
        </div>
        <div>
          <label htmlFor="textarea">문의 내용: </label>
          <textarea
            id="textarea"
            name="textarea"
            placeholder="문의 내용을 적어주세요."
          />
        </div>
      </div>
      <button type="submit">전송</button>
    </form>
  );
}
