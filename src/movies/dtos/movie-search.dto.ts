import { IsString } from 'class-validator';

export class MovieSearchDto {
  @IsString()
  q: string;
}
