import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: [
    {
      // here it goes skills basically so it will be an array
      type: String,
    },
  ],
  salary: {
    type: Number,
    required: true,
  },
  experienceLevel: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  company: {
    // This stores the ID of the company that has this job opening. For example, if Google posts a "Software Engineer" job, this field stores Google's ID. The required: true means every job MUST have a company - you can't create a job without specifying which company it belongs to.
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
    required: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications: [ // array of application IDs - it keeps track of all the applications submitted for this specific job. it's an array [] because one job can have many applications. Each time someone applies to this job, their application ID gets added to this array.
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
}, {timestamps:true}); // to keep track of createdAt and updatedAt timestamps);


export const Job = mongoose.model("Job", jobSchema);