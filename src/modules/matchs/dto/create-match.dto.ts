// create-match.dto.ts
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateMatchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  local: string;

  @IsNotEmpty()
  @IsString()
  team1: string;

  @IsNotEmpty()
  @IsString()
  team2: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsInt()
  matchGroupId: number;
}
