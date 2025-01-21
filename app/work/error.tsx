"use client";

import React, { useEffect } from "react";
/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">work 에러 발생</h2>
      <p className="text-sm">{error?.message}</p>
      <div>
        <button onClick={() => reset()}>재시도 하기</button>
      </div>
    </div>
  );
}
