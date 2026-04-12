import { getMainData } from "@/backend/main-actions";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(getMainData, "Error fetching main data:");
}
