import { IsString } from 'class-validator';

export class CreateMatchsGroupsDto {
  @IsString()
  name: string;
}
