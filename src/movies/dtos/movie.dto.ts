import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindMovieDto {
  @ApiProperty({ description: 'Find Movie with keyword' })
  @IsString()
  keyword: string;
}

export class MovieDetailDto {
  @ApiProperty({ description: 'Get Movie Detail By ID' })
  @IsString()
  id: string;
}
