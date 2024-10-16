import { Injectable } from '@nestjs/common';
import { CreatePlayerstatisticDto } from './dto/create-playerstatistic.dto';
import { UpdatePlayerstatisticDto } from './dto/update-playerstatistic.dto';

@Injectable()
export class PlayerstatisticsService {
  create(createPlayerstatisticDto: CreatePlayerstatisticDto) {
    return 'This action adds a new playerstatistic';
  }

  findAll() {
    return `This action returns all playerstatistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerstatistic`;
  }

  update(id: number, updatePlayerstatisticDto: UpdatePlayerstatisticDto) {
    return `This action updates a #${id} playerstatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerstatistic`;
  }
}
