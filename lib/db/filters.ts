export type PaginationFilter = {
  page?: number;
  limit?: number;
};

export const PAGINATION_FILTER_DEFAULTS = {
  page: 1,
  limit: 10,
};
