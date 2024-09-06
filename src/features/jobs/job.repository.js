// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { jobSchema } from "./schema/newJob.schema.js";

const jobModel = mongoose.model('Job', jobSchema);

export const createNewJob = async (job) => {
  // Write your code here
  const newJob = new jobModel(job);
  const savedJob = await newJob.save();
  return savedJob;
  // title,description,company,salary
};

export const applyJobRepo = async (jobId, userId) => {
  // Write your code here
  const job = await jobModel.findById(jobId);
  if (!job) return;
  if(job.applicants.includes(userId)) return;
  job.applicants.push(userId);
  const savedJob = await job.save();
  return savedJob;
};
export const findJobRepo = async (_id) => {
  // Write your code here
  const job = await jobModel.findById(_id);
  return job.description;
};
