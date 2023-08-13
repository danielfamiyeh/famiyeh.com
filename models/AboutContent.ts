import { prop, mongoose, getModelForClass } from "@typegoose/typegoose";

export default class AboutContent {
  @prop({ required: true, type: () => [String] })
  public content!: string[];
}

export const AboutContentModel =
  mongoose.models.AboutContent ?? getModelForClass(AboutContent);
