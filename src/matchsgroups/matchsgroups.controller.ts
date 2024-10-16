import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchsgroupsService } from './matchsgroups.service';
import { CreateMatchsgroupDto } from './dto/create-matchsgroup.dto';
import { UpdateMatchsgroupDto } from './dto/update-matchsgroup.dto';

@Controller('matchsgroups')
export class MatchsgroupsController {
  constructor(private readonly matchsgroupsService: MatchsgroupsService) {}

  @Post()
  create(@Body() createMatchsgroupDto: CreateMatchsgroupDto) {
    return this.matchsgroupsService.create(createMatchsgroupDto);
  }

  @Get()
  findAll() {
    return this.matchsgroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchsgroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchsgroupDto: UpdateMatchsgroupDto) {
    return this.matchsgroupsService.update(+id, updateMatchsgroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchsgroupsService.remove(+id);
  }
}
