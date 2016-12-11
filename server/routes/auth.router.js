import express from 'express';
import Authentication from '../controllers/auth.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ test: true });
});

router.post('/signin', Authentication.signin);
router.post('/signup', Authentication.signup);

export default router;
