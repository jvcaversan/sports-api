import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { MatchsgroupsModule } from './modules/matchsgroups/matchsgroups.module';
import { MatchsModule } from './modules/matchs/matchs.module';
import { MatchstatisticsModule } from './modules/matchstatistics/matchstatistics.module';
import { PlayerstatisticsModule } from './modules/playerstatistics/playerstatistics.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './database/prisma.module';
import { ProfileModule } from './modules/profile/profile.module';
@Module({
  imports: [
    UsersModule,
    MatchsgroupsModule,
    MatchsModule,
    MatchstatisticsModule,
    PlayerstatisticsModule,
    AuthModule,
    PrismaModule,
    ProfileModule,
  ],
})
export class AppModule {}
