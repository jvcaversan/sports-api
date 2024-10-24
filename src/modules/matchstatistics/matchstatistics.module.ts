import { Module } from '@nestjs/common';
import { MatchstatisticsService } from './matchstatistics.service';
import { MatchstatisticsController } from './matchstatistics.controller';

@Module({
  controllers: [MatchstatisticsController],
  providers: [MatchstatisticsService],
})
export class MatchstatisticsModule {}
