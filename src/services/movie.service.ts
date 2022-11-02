import Movie from '../models/movie';
import movies from '../database/movies.json';

export default class FilmService {
  findAll(): Movie[] {
    return movies;
  }

  findById(id: string): Movie {
    return movies.filter((movie: Movie) => movie.id === id)[0] || null;
  }

  findByReleaseDate(releaseDate: string): Movie[] {
    return movies.filter((movie: Movie) => movie.release_date === releaseDate) || null;
  }
}
