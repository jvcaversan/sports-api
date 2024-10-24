import { Injectable } from '@nestjs/common';
import { CreateMatchstatisticDto } from './dto/create-matchstatistic.dto';
import { UpdateMatchstatisticDto } from './dto/update-matchstatistic.dto';

@Injectable()
export class MatchstatisticsService {
  create(createMatchstatisticDto: CreateMatchstatisticDto) {
    return 'This action adds a new matchstatistic';
  }

  findAll() {
    return `This action returns all matchstatistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matchstatistic`;
  }

  update(id: number, updateMatchstatisticDto: UpdateMatchstatisticDto) {
    return `This action updates a #${id} matchstatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchstatistic`;
  }
}
