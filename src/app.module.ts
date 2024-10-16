import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MatchsgroupsModule } from './matchsgroups/matchsgroups.module';
import { MatchsModule } from './matchs/matchs.module';
import { MatchstatisticsModule } from './matchstatistics/matchstatistics.module';
import { PlayerstatisticsModule } from './playerstatistics/playerstatistics.module';
@Module({
  imports: [
    UsersModule,
    MatchsgroupsModule,
    MatchsModule,
    MatchstatisticsModule,
    PlayerstatisticsModule,
  ],
})
export class AppModule {}
