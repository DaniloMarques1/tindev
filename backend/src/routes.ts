import { Router } from 'express';
import DevController from './controllers/Dev';
import LikeController from './controllers/Like';
import DislikeController from './controllers/Dislike';

const routes = Router();

//DEVS
routes.post('/devs', DevController.store);

//LIKES
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

export default routes;