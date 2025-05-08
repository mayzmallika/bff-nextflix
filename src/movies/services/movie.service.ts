import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { MovieEntity } from '../entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(private readonly configService: ConfigService) {}

  async searchMovies(query: string): Promise<MovieEntity[]> {
    const url = this.configService.get<string>('OMDB_API_URL') ?? '';
    const key = this.configService.get<string>('OMDB_API_KEY') ?? '';

    try {
      const response = await axios.get(url, {
        params: {
          apikey: key,
          s: query,
        },
      });

      if (response.data.Response === 'False') return [];

      return response.data.Search.map((movie: any) => ({
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster,
      }));
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch movies');
    }
  }
}
