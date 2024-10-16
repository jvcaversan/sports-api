import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchsgroupDto } from './create-matchsgroup.dto';

export class UpdateMatchsgroupDto extends PartialType(CreateMatchsgroupDto) {}
