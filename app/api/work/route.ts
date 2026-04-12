import { getWorksData } from "@/backend/work-actions";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(getWorksData, "Error fetching works data:");
}
