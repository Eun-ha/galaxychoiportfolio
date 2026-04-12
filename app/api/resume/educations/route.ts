import { getEducationsData } from "@/backend/resume-actions";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(getEducationsData, "Error fetching education data:");
}
