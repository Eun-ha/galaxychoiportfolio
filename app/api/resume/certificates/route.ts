import { NextResponse } from "next/server";
import { getCertificatesData } from "@/backend/resume-actions";

export async function GET() {
  try {
    const data = await getCertificatesData();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching certificate data:", err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
