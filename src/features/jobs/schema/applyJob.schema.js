// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";

export const applyJobSchema = new mongoose.Schema({
  // Write your code here
  jobId:{
    type:mongoose.SchemaType.ObjectID,
    required:true,
    ref:'Job'
  },
  userId:{
    type:mongoose.SchemaType.ObjectID,
    required:true,
    ref:'User'
  }
});
