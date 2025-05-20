"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { authenticate } from "@/backend/account-actions";
import { Button } from "../button";
import React from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, dispatch] = React.useActionState(
    authenticate,
    undefined
  );
  const searchParms = useSearchParams();
  const signup = searchParms.get("signup");
  const signupEmail = searchParms.get("email");

  useEffect(() => {
    if (signup === "success" && signupEmail) setEmail(signupEmail);
  }, [signup, signupEmail]);

  const inputStyle =
    "peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";

  return (
    <form action={dispatch} className="space-y-3">
      <div>
        {signup === "success" && (
          <div>회원가입이 정상적으로 완료되었습니다.</div>
        )}

        <h1>운영툴을 이용하기 위해 로그인을 해주세요.</h1>
        <div className="w-full">
          <label htmlFor="email">이메일</label>
          <div>
            <input
              className={inputStyle}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label htmlFor="password">비밀번호</label>
          <div>
            <input
              className={inputStyle}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>
        </div>
        <LoginButton />
        {errorMessage && (
          <>
            <p>{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full mt-4" aria-disabled={pending}>
      로그인
    </Button>
  );
}
