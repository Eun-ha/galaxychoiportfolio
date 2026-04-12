import { getSkillData } from "@/backend/main-actions";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(getSkillData, "Error fetching skill data:");
}
