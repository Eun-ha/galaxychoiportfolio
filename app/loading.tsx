import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="space-y-4 text-center mt-[25%]">
      <BeatLoader
        color="#f85149"
        cssOverride={{}}
        loading
        margin={3}
        size={12}
        speedMultiplier={1}
      />
    </div>
  );
}
