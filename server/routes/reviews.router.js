import { Router } from 'express';
import {
  validateReview,
  postReview,
  } from '../controllers/reviews.controller';
import Auth from '../services/auth';

const router = Router();
router.use(Auth.ifAuthorized);

router.post('/', validateReview, postReview);

export default router;
