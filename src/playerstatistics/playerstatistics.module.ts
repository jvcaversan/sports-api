import { Module } from '@nestjs/common';
import { PlayerstatisticsService } from './playerstatistics.service';
import { PlayerstatisticsController } from './playerstatistics.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlayerstatisticsController],
  providers: [PlayerstatisticsService],
})
export class PlayerstatisticsModule {}
