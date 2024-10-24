import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatchGroupService } from './matchsgroups.service';
import { CreateMatchsGroupsDto } from './dto/create-matchsgroup.dto';
import { UpdateMatchsGroupsDto } from './dto/update-matchsgroup.dto';

@Controller('matchsgroups')
export class MatchsgroupsController {
  constructor(private readonly matchsGroupsService: MatchGroupService) {}

  @Post()
  create(@Body() createMatchsGroups: CreateMatchsGroupsDto) {
    return this.matchsGroupsService.create(createMatchsGroups);
  }

  @Get()
  findAll() {
    return this.matchsGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchsGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMatchsGroupsDto: UpdateMatchsGroupsDto,
  ) {
    return this.matchsGroupsService.update(+id, updateMatchsGroupsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchsGroupsService.remove(+id);
  }
}
