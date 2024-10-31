import { Module } from '@nestjs/common';
import { MatchsService } from './matchs.service';
import { MatchsController } from './matchs.controller';
import { UsersModule } from '../users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [MatchsController],
  providers: [MatchsService],
})
export class MatchsModule {}
