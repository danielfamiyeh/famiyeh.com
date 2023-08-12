import connectDB from "./db";
import { Experience } from "@/models/Experience";
import { PaginationFilter, PAGINATION_FILTER_DEFAULTS } from "./filters";

export type ExperienceFilters = PaginationFilter;

/**
 * Fetch projects from database
 *
 * @param {ExperienceFilters} filters Experience filters
 * @returns {any} Experiences or Error class
 */
export async function getExperiences(
  filters: ExperienceFilters = {}
): Promise<any> {
  try {
    await connectDB();

    const _filters = Object.assign({}, PAGINATION_FILTER_DEFAULTS, filters);
    const skip = (_filters.page - 1) * _filters.limit;

    const experiences = await Experience.find()
      .skip(skip)
      .limit(_filters.limit)
      .lean()
      .exec();

    return { numResults: experiences.length, experiences };
  } catch (error: any) {
    return { error };
  }
}
