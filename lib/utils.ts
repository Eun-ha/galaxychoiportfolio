import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("데이터 로드 실패:", error);
    return null; // 에러 발생 시 null 반환
  }
}
