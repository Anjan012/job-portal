import mongoose from 'mongoose';

const aplicationSchema = new mongoose.Schema({
    // This is the ID of the user who applied for the job
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
}, {timestamps:true}); // to keep track of createdAt and updatedAt timestamps);

export const Application = mongoose.model('Application', aplicationSchema);