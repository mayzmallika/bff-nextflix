export class MovieEntity {
  id: string;
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export class MovieDetailEntity {
  id: string;
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: Array<{ Source: string; Value: string }>;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  totalSeasons: string;
  response: string;
}
