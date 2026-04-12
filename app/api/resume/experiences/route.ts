import { getExperiencesData } from "@/backend/resume-actions";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(getExperiencesData, "Error fetching experience data:");
}
