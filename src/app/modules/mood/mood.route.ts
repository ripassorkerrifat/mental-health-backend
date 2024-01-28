import express from 'express';
import { MoodControler } from './mood.controller';

// import { USER_ROLE } from '../../../enums/user';
// import { auth } from '../../middleware/auth';

const router = express.Router();

router.post('/', MoodControler.createMood);
router.get('/:id', MoodControler.getAllMoodByUser);
router.get('/get-last/:id', MoodControler.getLastOne);

export const MoodRoutes = router;
