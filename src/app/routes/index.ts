import { MoodRoutes } from './../modules/mood/mood.route';
import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
   // ... routes
   {
      path: '/user',
      routes: UserRoutes,
   },
   {
      path: '/auth',
      routes: AuthRoutes,
   },
   {
      path: '/mood',
      routes: MoodRoutes,
   },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
