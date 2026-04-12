import { NextResponse } from "next/server";

type ApiResolver<T> = () => Promise<T> | T;

export async function withApiHandler<T>(
  resolver: ApiResolver<T>,
  context: string
) {
  try {
    const data = await resolver();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`[API] ${context}`, error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
