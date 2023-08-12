import { prop, getModelForClass } from "@typegoose/typegoose";

export class ExperienceClass {
  @prop({ required: true, unique: true })
  public title!: string;

  @prop({ required: true })
  logo!: string;

  @prop()
  logoBg?: boolean;

  @prop({ required: true })
  employer!: string;

  @prop({ required: true, type: () => [String] })
  description!: string[];

  @prop({ required: true, type: () => [String] })
  skills!: string[];

  @prop({ required: true })
  startDate!: Date;

  @prop()
  endDate?: Date;
}

export const Experience = getModelForClass(ExperienceClass);
