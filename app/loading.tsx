"use client";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function Loading() {
  const [loading] = useState(true);
  return (
    <div className="space-y-4 text-center mt-[35%]">
      <BeatLoader
        color="#f85149"
        loading={loading}
        margin={3}
        size={12}
        speedMultiplier={1}
      />
    </div>
  );
}
