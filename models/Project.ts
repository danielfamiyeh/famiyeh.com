import { prop } from "@typegoose/typegoose";
import { ExternalLink } from "./ExternalLink";

export class Project {
  @prop({ required: true })
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
