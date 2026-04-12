import { TitleAndDescription } from "@/data/resume";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(
    async () => TitleAndDescription,
    "Error fetching title and description data:"
  );
}
