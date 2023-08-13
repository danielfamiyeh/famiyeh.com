import { NextRequest } from "next/server";

export type PaginationFilter = {
  page?: number;
  limit?: number;
};

export const PAGINATION_FILTER_DEFAULTS = {
  page: 1,
  limit: 10,
};

export const getPaginationFiltersFromParams = (req: NextRequest) => {
  const pageParam = req.nextUrl.searchParams.get("page");
  const limitParam = req.nextUrl.searchParams.get("limit");

  const page = pageParam
    ? parseInt(pageParam, 10)
    : PAGINATION_FILTER_DEFAULTS.page;

  const limit = limitParam
    ? parseInt(limitParam, 10)
    : PAGINATION_FILTER_DEFAULTS.limit;

  return { page, limit };
};
