import express from 'express';
import {
  applyForJob,
  getMyApplications,
  getJobApplications,
  updateApplicationStatus
} from '../controllers/applicationController.js';
import { protect } from '../middleware/auth.js';
import { authorize } from '../middleware/roleCheck.js';

const router = express.Router();

router.post('/', protect, authorize('jobseeker'), applyForJob);
router.get('/my-applications', protect, authorize('jobseeker'), getMyApplications);
router.get('/job/:jobId', protect, authorize('recruiter', 'admin'), getJobApplications);
router.put('/:id', protect, authorize('recruiter', 'admin'), updateApplicationStatus);

export default router;