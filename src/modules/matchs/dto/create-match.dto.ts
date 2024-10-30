import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  local: string;

  @IsString()
  @IsNotEmpty()
  team1: string;

  @IsString()
  @IsNotEmpty()
  team2: string;

  @IsString()
  @IsNotEmpty()
  time: string;
}
