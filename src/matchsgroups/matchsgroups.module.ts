import { Module } from '@nestjs/common';
import { MatchsgroupsService } from './matchsgroups.service';
import { MatchsgroupsController } from './matchsgroups.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MatchsgroupsController],
  providers: [MatchsgroupsService],
})
export class MatchsgroupsModule {}
