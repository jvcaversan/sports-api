import { Injectable } from '@nestjs/common';
import { CreateMatchsgroupDto } from './dto/create-matchsgroup.dto';
import { UpdateMatchsgroupDto } from './dto/update-matchsgroup.dto';

@Injectable()
export class MatchsgroupsService {
  create(createMatchsgroupDto: CreateMatchsgroupDto) {
    return 'This action adds a new matchsgroup';
  }

  findAll() {
    return `This action returns all matchsgroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matchsgroup`;
  }

  update(id: number, updateMatchsgroupDto: UpdateMatchsgroupDto) {
    return `This action updates a #${id} matchsgroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchsgroup`;
  }
}
