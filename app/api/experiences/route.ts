import { NextRequest, NextResponse } from "next/server";

import { getPaginationFiltersFromParams } from "@/lib/db/filters";
import { getExperiences } from "@/lib/db/experience-db";

export async function GET(req: NextRequest) {
  try {
    const { page, limit } = getPaginationFiltersFromParams(req);
    const { numResults, experiences } = await getExperiences({ page, limit });

    return NextResponse.json({ status: "success", numResults, experiences });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
