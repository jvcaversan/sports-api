import { Module } from '@nestjs/common';
import { MatchGroupService } from './matchsgroups.service';
import { MatchsgroupsController } from './matchsgroups.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [MatchsgroupsController],
  providers: [MatchGroupService],
})
export class MatchsgroupsModule {}
