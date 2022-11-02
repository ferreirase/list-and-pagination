import { Request, Response, NextFunction } from 'express';
import MovieService from '../services/movie.service';
import Movie from '../models/movie';

const movieService = new MovieService();

export function findAll(req: Request, res: Response, next: NextFunction) {
  const offset = req.query.offset || 1;
  const limit = req.query.limit || 5;

  const totalPages = Math.ceil(movieService.findAll().length / Number(limit));

  const startIndex = (Number(offset) - 1) * Number(limit) || 0;

  const endIndex = Number(offset) * Number(limit) || 5;

  try {
    return res.json({
      totalPages,
      currentPage: parseInt(String(offset), 10),
      movies: movieService.findAll()
        .slice(startIndex, endIndex)
        .sort((a: Movie, b: Movie) => Number(a.release_date) - Number(b.release_date)),
    });
  } catch (err: Error | unknown) {
    console.error('Error while getting movies: ', err);
    next(err);
  }
}

export function findById(req: Request, res: Response) {
  if (!movieService.findById(req.params.id)) {
    return res.status(404).json({
      message: 'Movie not found',
    });
  }

  return res.json({
    movie: movieService.findById(req.params.id),
  });
}

export function findByReleaseDate(req: Request, res: Response) {
  return res.json({
    movies: movieService.findByReleaseDate(req.params.release_date),
  });
}
