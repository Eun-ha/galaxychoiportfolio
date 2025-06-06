"use client";

import ErrorIcon from "@/icons/errorIcon";
import RefreshIcon from "@/icons/refreshIcon";
import React, { useEffect } from "react";
/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <div className="mt-[15%] text-center lg:text-initial lg:flex-grow">
      <ErrorIcon />
      <h2 className="text-lg mt-2">Resume-slug 에러가 발생 하였습니다.</h2>
      <button
        onClick={() => reset()}
        className="mt-2"
        aria-label="재시도 하기 버튼"
      >
        재시도 하기
        <RefreshIcon />
      </button>
    </div>
  );
}
