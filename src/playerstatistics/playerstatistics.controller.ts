import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerstatisticsService } from './playerstatistics.service';
import { CreatePlayerstatisticDto } from './dto/create-playerstatistic.dto';
import { UpdatePlayerstatisticDto } from './dto/update-playerstatistic.dto';

@Controller('playerstatistics')
export class PlayerstatisticsController {
  constructor(private readonly playerstatisticsService: PlayerstatisticsService) {}

  @Post()
  create(@Body() createPlayerstatisticDto: CreatePlayerstatisticDto) {
    return this.playerstatisticsService.create(createPlayerstatisticDto);
  }

  @Get()
  findAll() {
    return this.playerstatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerstatisticsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerstatisticDto: UpdatePlayerstatisticDto) {
    return this.playerstatisticsService.update(+id, updatePlayerstatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerstatisticsService.remove(+id);
  }
}
