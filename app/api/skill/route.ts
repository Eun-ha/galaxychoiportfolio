import { NextResponse } from "next/server";
import { getSkillData } from "@/backend/main-actions";

export async function GET() {
  try {
    const data = await getSkillData();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching skill data:", err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
