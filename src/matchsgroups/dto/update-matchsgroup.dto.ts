import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchsGroupsDto } from './create-matchsgroup.dto';

export class UpdateMatchsGroupsDto extends PartialType(CreateMatchsGroupsDto) {}
