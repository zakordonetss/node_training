import { Router } from 'express';
import { BASE_URL } from '../../config/config';

import basic from './basic'

const router = Router();

router.use(BASE_URL, basic)

export default router;

