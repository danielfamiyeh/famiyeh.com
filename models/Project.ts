import mongoose from "mongoose";
import { prop, getModelForClass } from "@typegoose/typegoose";

import { ExternalLink } from "./ExternalLink";

export class Project {
  @prop({ required: true, unique: true })
  public title!: string;

  @prop({ required: true })
  public subtitle!: string;

  @prop({ required: true, type: () => [String] })
  public description!: string[];

  @prop({ required: true, type: () => [String] })
  public skills!: string[];

  @prop({ required: true })
  public startDate!: Date;

  @prop()
  public endDate?: Date;

  @prop({ required: true, type: () => [String] })
  public images!: string[];

  @prop({ required: true, type: () => [ExternalLink] })
  public links!: ExternalLink[];
}

export const ProjectModel =
  mongoose.models.Project ?? getModelForClass(Project);
