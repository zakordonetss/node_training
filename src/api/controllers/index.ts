import { Router } from 'express';
import { BASE_URL } from '../../config/config';

import about from './about';
import basic from './basic';
import help from './help';

const router = Router();

router.use(BASE_URL, basic);
router.use(`${BASE_URL}/help`, help);
router.use(`${BASE_URL}/about`, about);

export default router;

