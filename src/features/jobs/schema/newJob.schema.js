// Please don't change the pre-written code
// Import the necessary modules

import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
  // Write your code here
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  company:{
    type:String,
    required:true
  },
  salary:{
    type:Number,
    required:true
  },
  applicants:{
    type:mongoose.SchemaType.ObjectID,
    required:true,
    ref:'User'
  }
});


