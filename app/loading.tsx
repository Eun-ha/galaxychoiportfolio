"use client";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function Loading() {
  const [loading] = useState(true);
  return (
    <div className="text-center mt-[25%] lg:mt-[20%]">
      <BeatLoader
        color="#f85149"
        loading={loading}
        margin={3}
        size={10}
        speedMultiplier={1}
      />
    </div>
  );
}
