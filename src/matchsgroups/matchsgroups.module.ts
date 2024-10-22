import { Module } from '@nestjs/common';
import { MatchGroupService } from './matchsgroups.service';
import { MatchsgroupsController } from './matchsgroups.controller';

@Module({
  controllers: [MatchsgroupsController],
  providers: [MatchGroupService],
})
export class MatchsgroupsModule {}
