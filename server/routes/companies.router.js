import { Router } from 'express';
import {
  fetchCompanies,
  postCompany,
  } from '../controllers/companies.controller';
// import Auth from '../services/auth';

const router = Router();
// router.use(Auth.ifAuthorized);

router.get('/', fetchCompanies);
router.post('/', postCompany);

export default router;
