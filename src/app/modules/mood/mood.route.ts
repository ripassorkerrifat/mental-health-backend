import express from 'express';
import { MoodControler } from './mood.controller';

// import { USER_ROLE } from '../../../enums/user';
// import { auth } from '../../middleware/auth';

const router = express.Router();

router.post('/', MoodControler.createMood);
router.get('/:id', MoodControler.getAllMoodByUser);
router.get('/get-last/:id', MoodControler.getLastOne);

// write mood routes
router.post('/write', MoodControler.createWriteMood);
router.get('/write/user/:id', MoodControler.getWriteMoodByUser);
router.get('/write/:id', MoodControler.getSingleWriteMood);
router.delete('/write/:id', MoodControler.deleteSingleWriteMood);
export const MoodRoutes = router;
