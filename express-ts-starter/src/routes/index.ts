import { Request, Response, Router } from 'express';
import postRoutes from './post';

const routes = Router();
routes.use('/posts', postRoutes);

export default routes;
