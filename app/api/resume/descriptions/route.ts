import { getDescriptionsData } from "@/backend/resume-actions";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(getDescriptionsData, "Error fetching description data:");
}
