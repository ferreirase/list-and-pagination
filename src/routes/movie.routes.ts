import express from 'express';
import {  findAll, findById, findByReleaseDate } from '../controllers/movie.controller';

const movieRouter = express.Router();

movieRouter.get('/', findAll);
movieRouter.get('/:id', findById);
movieRouter.get('/release/:release_date', findByReleaseDate);


export default movieRouter;
