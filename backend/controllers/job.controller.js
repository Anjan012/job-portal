import { Job } from "../models/job.model.js";

// admin posts a new job
export const postJob = async (req, res) => {
    try {
        const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
        const userId = req.id;

        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false,
            });
        };
        
        const job = Job.create({
            title,
            description,
            requirements: requirements.split(","), // this will be string so we need to split it
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });

        return res.status(201).json({
            message: "New Job posted successfully.",
            success: true,
            job,
        });

    } catch (error) {
        console.log(error);
    }
};


// get all jobs (student)
export const getAllJobs = async (req, res) => {
    try {

        // we will filter th jobs using kewords ?keywords="developer", we can access it using req.query
        const keyword = req.query.keyword || "";

        const query = {
            // $or means if any of these condition is true title matches OR description matches → show the jobs
            $or: [
                {title: {$regex: keyword, $options: "i"}}, // i means case insensitive. $regex is used for pattern matching
                {description: {$regex: keyword, $options: "i"}}
            ]
        };

        const jobs = await Job.find(query);

        if(!jobs) {
            return res.status(404).json({
                message: "No jobs found.",
                success: false,
            });
        };

        return res.status(200).json({
            success: true,
            jobs,
        });

    } catch (error) {
        console.log(error);
        
    }
};

// get job by id (student)
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findBy(jobId);

        if(!job){
            return res.status(404).json({
                message: "Job not found.",
                success: false,
            });
        };

        return res.status(200).json({
            success: true,
            job,
        });
        
    } catch (error) {
        console.log(error);
    }
};

// how many job postings a company has made (company admin)
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;

        const jobs = Job.find({created_by: adminId});

        if(!jobs) {
            return res.status(404).json({
                message: "No jobs found.",
                success: false,
            });
        };
        
        return res.status(200).json({
            success: true,
            jobs,
        });
        
    } catch (error) {
        console.log(error);
    }
}
