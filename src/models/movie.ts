export interface IFilm {
  id: string;
  title: string;
  description: string;
  original_title: string;
  release_date: string;
  rt_score: string;
}

export default class Film implements IFilm {
  id: string;
  title: string;
  description: string;
  original_title: string;
  release_date: string;
  rt_score: string;

  constructor(id: string, title: string, description: string, original_title: string, release_date: string, rt_score: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.original_title = original_title;
    this.release_date = release_date;
    this.rt_score = rt_score;
  }

}
