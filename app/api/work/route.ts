import { NextResponse } from "next/server";
import { getWorksData } from "@/backend/work-actions";

export async function GET() {
  try {
    const data = await getWorksData();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching works data:", err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
