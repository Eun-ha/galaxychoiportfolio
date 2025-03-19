"use client";

import { createDescription } from "@/backend/resume-actions";
import { Button } from "@/components/button";
import { BoundaryFrom } from "@/components/ui/boundary-form";
import { useActionState, useEffect, useState } from "react";

export default function Page() {
  const initialState = { errors: {}, message: "" };
  const [actionState, formAction, isPending] = useActionState(
    createDescription,
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
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title" placeholder="title" />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="date">date</label>
            <input type="text" id="date" name="date" placeholder="date" />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="performance">performance</label>
            <input
              type="text"
              id="performance"
              name="performance"
              placeholder="performance"
            />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="role">role</label>
            <input type="text" id="role" name="role" placeholder="role" />
          </div>
          <div className="w-full flex mb-3">
            <label htmlFor="skills">skills</label>
            <input type="text" id="skills" name="skills" placeholder="skills" />
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
