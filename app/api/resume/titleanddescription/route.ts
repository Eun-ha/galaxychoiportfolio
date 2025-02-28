import { TitleAndDescription } from "@/data/resume";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await TitleAndDescription;
  if (!data) {
    return new NextResponse("Bad Request", { status: 400 });
  }
  return NextResponse.json(data);
}
