import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchstatisticsService } from './matchstatistics.service';
import { CreateMatchstatisticDto } from './dto/create-matchstatistic.dto';
import { UpdateMatchstatisticDto } from './dto/update-matchstatistic.dto';

@Controller('matchstatistics')
export class MatchstatisticsController {
  constructor(private readonly matchstatisticsService: MatchstatisticsService) {}

  @Post()
  create(@Body() createMatchstatisticDto: CreateMatchstatisticDto) {
    return this.matchstatisticsService.create(createMatchstatisticDto);
  }

  @Get()
  findAll() {
    return this.matchstatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchstatisticsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchstatisticDto: UpdateMatchstatisticDto) {
    return this.matchstatisticsService.update(+id, updateMatchstatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchstatisticsService.remove(+id);
  }
}
