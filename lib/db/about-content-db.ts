import connectDB from "./db";
import mongoose from "mongoose";
import AboutContent, { AboutContentModel } from "@/models/AboutContent";

export async function getAboutContents(): Promise<any> {
  try {
    await connectDB();

    const aboutContents = await AboutContentModel.findOne().lean().exec();
    const { _id } = aboutContents as AboutContent & {
      _id: mongoose.Types.ObjectId;
    };

    return { aboutContents: { ...aboutContents, _id: _id.toString() } };
  } catch (error: any) {
    return { error: error.message };
  }
}
