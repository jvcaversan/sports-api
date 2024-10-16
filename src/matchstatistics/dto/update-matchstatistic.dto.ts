import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchstatisticDto } from './create-matchstatistic.dto';

export class UpdateMatchstatisticDto extends PartialType(CreateMatchstatisticDto) {}
