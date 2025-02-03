import { skills } from "@/data/main";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await skills;
  if (!data) {
    return new NextResponse("Bad Request", { status: 400 });
  }
  return NextResponse.json(data);
}
