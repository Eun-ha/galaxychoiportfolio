import { main } from "@/data/home";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await main;
  if (!data) {
    return new NextResponse("Bad Request", { status: 400 });
  }
  return NextResponse.json(data);
}
