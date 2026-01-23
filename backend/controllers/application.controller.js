import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const { id: jobId } = req.params; // const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job ID is required to apply.",
        success: false,
      });
    }

    // check if the user has already applied to this job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    }); // it ask mongodb Is there already an application for this job (jobId) made by this user (userId)

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied to this job.",
        success: false,
      });
    }

    // check if the job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }

    // create a new application
    const newApplication = new Application({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);

    await job.save();

    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all applied jobs
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = (await Application.find({ applicant: userId }))
      .toSorted({ createdAt: -1 })
      .populate({
        path: "job",
        options: {
          sort: { createdAt: -1 },
        },
        // nested populate
        populate: {
          path: "company",
          options: {
            sort: { createdAt: -1 },
          },
        },
      }); // find all applications made by this user

    if (!application) {
      return res.status(404).json({
        message: "No Applications",
        success: false,
      });
    };

    return res.status(200).json({
      success: true,
      application,
    });

  } catch (error) {
    console.log(error);
  }
};

// admin will see how many applications are there for their job postings
const getApplicants = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
};
