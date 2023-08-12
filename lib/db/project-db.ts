import connectDB from "./db";
import { Project } from "@/models/Project";
import { PaginationFilter, PAGINATION_FILTER_DEFAULTS } from "./filters";

export type ProjectFilters = PaginationFilter;

/**
 * Fetch projects from database
 *
 * @param {ProjectFilters} filters Project filters
 * @returns {any} Projects or Error class
 */
export async function getProjects(filters: ProjectFilters = {}): Promise<any> {
  try {
    await connectDB();

    const _filters = Object.assign({}, PAGINATION_FILTER_DEFAULTS, filters);
    const skip = (_filters.page - 1) * _filters.limit;

    const projects = await Project.find()
      .skip(skip)
      .limit(_filters.limit)
      .lean()
      .exec();

    return { numResults: projects.length, projects };
  } catch (error: any) {
    return { error };
  }
}
