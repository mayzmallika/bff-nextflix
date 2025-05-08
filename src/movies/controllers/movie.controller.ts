import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from '../services/movie.service';
import { MovieSearchDto } from '../dtos/movie-search.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('search')
  async search(@Query() query: MovieSearchDto) {
    const results = await this.movieService.searchMovies(query.q);
    return {
      status: 'success',
      data: results,
    };
  }
}
