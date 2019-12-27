import { Router } from 'express';
import DevController from './controllers/Dev';

const routes = Router();

routes.post('/devs', DevController.store);

export default routes;