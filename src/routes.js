import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ScoreController from './app/controllers/ScoreController';

const routes = new Router();

routes.get('/user', UserController.store);
routes.get('/score/:id', ScoreController.store);

export default routes;
