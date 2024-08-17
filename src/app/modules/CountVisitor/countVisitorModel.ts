import { Schema } from "mongoose";
import { model } from "mongoose";
const countVisitorSchema = new Schema({

},{timestamps : true});
export const visitorModel = model('visitor', countVisitorSchema);
