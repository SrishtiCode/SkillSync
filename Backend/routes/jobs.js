import express from 'express';
import {
  createJob,
  getAllJobs,
  getJobById,
  getMyJobs,
  updateJob,
  deleteJob
} from '../controllers/jobController.js';
import { protect } from '../middleware/auth.js';
import { authorize } from '../middleware/roleCheck.js';

const router = express.Router();

router.route('/')
  .get(getAllJobs)
  .post(protect, authorize('recruiter', 'admin'), createJob);

router.get('/my-jobs', protect, authorize('recruiter', 'admin'), getMyJobs);

router.route('/:id')
  .get(getJobById)
  .put(protect, authorize('recruiter', 'admin'), updateJob)
  .delete(protect, authorize('recruiter', 'admin'), deleteJob);

export default router;
