import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { MovieService } from '../services/movie.service';
import { FindMovieDto } from '../dtos/movie.dto';

@ApiTags('OMDb Movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('')
  @ApiOperation({ summary: 'Find Movie with Keyword' })
  async find(@Query() query: FindMovieDto) {
    const results = await this.movieService.findMovie(query.keyword);
    return {
      status: 'success',
      data: results,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Movie Detail by ID' })
  async detail(@Param('id') id: string) {
    const results = await this.movieService.getMovieDetail(id);
    return {
      status: 'success',
      data: results,
    };
  }
}
