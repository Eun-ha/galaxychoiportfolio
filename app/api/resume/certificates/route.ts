import { getCertificatesData } from "@/backend/resume-actions";
import { withApiHandler } from "@/lib/with-api-handler";

export async function GET() {
  return withApiHandler(getCertificatesData, "Error fetching certificate data:");
}
