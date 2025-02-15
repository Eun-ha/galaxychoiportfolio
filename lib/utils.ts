import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("데이터 로드 실패");
  }
  return response.json();
}
