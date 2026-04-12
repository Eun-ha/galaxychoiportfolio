import { asideButtons } from "@/data/resume";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(async () => asideButtons, "Error fetching aside button data:");
}
