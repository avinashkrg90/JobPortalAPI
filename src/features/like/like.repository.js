// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";

import { likeSchema } from "./like.schema.js";


const likesModel = mongoose.model('Like', likeSchema);

export const likeRepo = async (user_id, id, model) => {// job_id
  // Write your code here
  const newLike = new likesModel({user:user_id, likeable:id, on_model:model});
  const savedLike = await newLike.save();
  return savedLike;
};

export const getLikesRepo = async (id, on_model) => {
  // Write your code here
  const like = await likesModel.findOne({likeable:id, on_model});
  return like;
};
