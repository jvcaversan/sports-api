import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MatchsgroupsModule } from './matchsgroups/matchsgroups.module';
import { MatchsModule } from './matchs/matchs.module';
import { MatchstatisticsModule } from './matchstatistics/matchstatistics.module';
import { PlayerstatisticsModule } from './playerstatistics/playerstatistics.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './database/prisma.module';
@Module({
  imports: [
    UsersModule,
    MatchsgroupsModule,
    MatchsModule,
    MatchstatisticsModule,
    PlayerstatisticsModule,
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
