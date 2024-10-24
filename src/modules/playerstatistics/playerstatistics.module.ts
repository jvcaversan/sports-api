import { Module } from '@nestjs/common';
import { PlayerstatisticsService } from './playerstatistics.service';
import { PlayerstatisticsController } from './playerstatistics.controller';

@Module({
  controllers: [PlayerstatisticsController],
  providers: [PlayerstatisticsService],
})
export class PlayerstatisticsModule {}
