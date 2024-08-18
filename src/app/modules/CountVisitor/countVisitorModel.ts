import { Schema } from "mongoose";
import { model } from "mongoose";
const countVisitorSchema = new Schema({
    totalVisitor : {type : String, require : false}
},{timestamps : true});
export const visitorModel = model('visitor', countVisitorSchema);
