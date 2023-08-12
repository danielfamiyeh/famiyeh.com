import { NextRequest, NextResponse } from "next/server";

import { getPaginationFiltersFromParams } from "@/lib/db/filters";
import { getProjects } from "@/lib/db/project-db";

export async function GET(req: NextRequest) {
  try {
    const { page, limit } = getPaginationFiltersFromParams(req);
    const { numResults, projects } = await getProjects({ page, limit });

    return NextResponse.json({ status: "success", numResults, projects });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
