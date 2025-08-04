import { NextResponse } from "next/server";
import { getDescriptionsData } from "@/backend/resume-actions";

export async function GET() {
  try {
    const data = await getDescriptionsData();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching description data:", err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
