import { works } from "@/data/work";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await works;
  if (!data) {
    return new NextResponse("Bad Request", { status: 400 });
  }
  return NextResponse.json(data);
}
