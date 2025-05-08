import { Module } from '@nestjs/common';
import { MovieController } from './controllers/movie.controller';
import { MovieService } from './services/movie.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
})
export class MoviesModule {}
