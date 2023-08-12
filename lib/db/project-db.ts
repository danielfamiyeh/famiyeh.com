import mongoose from "mongoose";

import { PaginationFilter, PAGINATION_FILTER_DEFAULTS } from "./filters";
import { ProjectModel } from "@/models/Project";
import connectDB from "./db";

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

    const projects = (
      await ProjectModel.find().skip(skip).limit(_filters.limit).lean().exec()
    ).map((project: any) => ({ ...project, _id: project._id.toString() }));

    return { numResults: projects.length, projects };
  } catch (error: any) {
    return { error: error.message };
  }
}
