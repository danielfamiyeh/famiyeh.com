import { prop } from "@typegoose/typegoose";

export class ExternalLink {
  @prop({ required: true })
  public site!: string;

  @prop({ required: true })
  public url!: string;
}
