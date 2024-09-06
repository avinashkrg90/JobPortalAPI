// Please don't change the pre-written code
// Import the necessary modules here
import mongoose, { mongo } from "mongoose";

export const likeSchema = new mongoose.Schema({
  // Write your code here
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
  },
  likeable:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    refPath:'on_model'
  },
  on_model:{
    type:String,
    required:true,
    enum:['User', 'Job']
  }
});
