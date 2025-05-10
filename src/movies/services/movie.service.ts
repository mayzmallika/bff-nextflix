import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { MovieDetailEntity, MovieEntity } from '../entities/movie.entity';
import { getHighQualityPosterUrl } from 'src/utils/movie.util';

@Injectable()
export class MovieService {
  constructor(private readonly configService: ConfigService) {}

  async findMovie(keyword: string): Promise<MovieEntity[]> {
    const url = this.configService.get<string>('OMDB_API_URL') ?? '';
    const key = this.configService.get<string>('OMDB_API_KEY') ?? '';

    try {
      const response = await axios.get(url, {
        params: {
          apikey: key,
          s: keyword,
        },
      });

      if (response.data.Response === 'False') return [];

      return response.data.Search.map((movie: any) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID,
        type: movie.Type,
        poster: getHighQualityPosterUrl(movie.Poster),
      }));
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch movies');
    }
  }

  async getMovieDetail(id: string): Promise<MovieDetailEntity> {
    const url = this.configService.get<string>('OMDB_API_URL') ?? '';
    const key = this.configService.get<string>('OMDB_API_KEY') ?? '';
    console.log('id', id);

    try {
      const response = await axios.get(url, {
        params: {
          apikey: key,
          i: id,
        },
      });

      if (response.data.Response === 'False') return {} as MovieDetailEntity;

      let responseData = {
        id: response.data.imdbID,
        title: response.data.Title,
        year: response.data.Year,
        rated: response.data.Rated,
        released: response.data.Released,
        runtime: response.data.Runtime,
        genre: response.data.Genre,
        director: response.data.Director,
        writer: response.data.Writer,
        actors: response.data.Actors,
        plot: response.data.Plot,
        language: response.data.Language,
        country: response.data.Country,
        awards: response.data.Awards,
        poster: getHighQualityPosterUrl(response.data.Poster),
        metascore: response.data.Metascore,
        imdbRating: response.data.imdbRating,
        imdbVotes: response.data.imdbVotes,
        imdbID: response.data.imdbID,
        type: response.data.Type,
        totalSeasons: response.data.totalSeasons,
        response: response.data.Response,
        ratings: [],
      };

      return responseData;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch movies');
    }
  }
}
