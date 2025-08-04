import { NextResponse } from "next/server";
import { getExperiencesData } from "@/backend/resume-actions";

export async function GET() {
  try {
    const data = await getExperiencesData();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching works data:", err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
