import mongoose from "mongoose";
import { NewSchema } from "../models/newSchema";

export const NewRepository = mongoose.model("news", NewSchema)

