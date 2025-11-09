import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Job description is required']
  },
  requirements: [String],
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'USD'
    }
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'],
    default: 'Full-time'
  },
  experienceLevel: {
    type: String,
    enum: ['Entry', 'Mid', 'Senior', 'Lead'],
    default: 'Mid'
  },
  category: {
    type: String,
    enum: ['IT', 'Marketing', 'Sales', 'Design', 'Finance', 'HR', 'Other'],
    default: 'Other'
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }],
  status: {
    type: String,
    enum: ['active', 'closed'],
    default: 'active'
  }
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);