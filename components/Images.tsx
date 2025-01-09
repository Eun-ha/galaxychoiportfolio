import Image from "next/image";

export function Images({ path, title }: { path: string; title: string }) {
  return (
    <div className="relative h-[500px] lg:w-[1000px] ">
      <Image
        src={`/images/works/${path}.png`}
        alt={title}
        width={0}
        height={0}
        fill
        sizes="100% 300px"
        className="object-cover"
      />
    </div>
  );
}
