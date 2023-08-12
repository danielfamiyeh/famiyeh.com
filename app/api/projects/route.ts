import { getProjects } from "@/lib/db/project-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const pageParam = req.nextUrl.searchParams.get("page");
    const limitParam = req.nextUrl.searchParams.get("limit");

    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const limit = limitParam ? parseInt(limitParam, 10) : 10;

    const { numResults, projects } = await getProjects({ page, limit });

    return NextResponse.json({ status: "success", numResults, projects });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
