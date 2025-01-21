import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData(url: string) {
  const response = await fetch(url, {
    // 스트리밍을 더 잘 보여주기 위해 Next.js 캐시를 의도적으로 비활성화합니다
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("데이터 로드 실패");
  }
  return response.json();
}
