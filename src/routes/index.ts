import { Router } from 'express';
import movieRoutes from './movie.routes';

const routes = Router();

routes.use('/movies', movieRoutes);

export default routes;
