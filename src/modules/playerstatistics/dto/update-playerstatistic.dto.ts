import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerstatisticDto } from './create-playerstatistic.dto';

export class UpdatePlayerstatisticDto extends PartialType(CreatePlayerstatisticDto) {}
