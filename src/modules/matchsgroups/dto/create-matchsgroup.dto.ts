import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMatchsGroupsDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
