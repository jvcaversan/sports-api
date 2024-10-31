import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MatchGroupService } from './matchsgroups.service';
import { CreateMatchsGroupsDto } from './dto/create-matchsgroup.dto';
import { UpdateMatchsGroupsDto } from './dto/update-matchsgroup.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('matchsgroups')
export class MatchsgroupsController {
  constructor(private readonly matchsGroupsService: MatchGroupService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createMatchsGroups: CreateMatchsGroupsDto, @Request() req) {
    const userId = req.user.id;
    const matchGroupData = {
      ...createMatchsGroups,
      admin: userId,
    };
    return this.matchsGroupsService.create(matchGroupData, userId);
  }

  @Get()
  findAll() {
    return this.matchsGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchsGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMatchsGroupsDto: UpdateMatchsGroupsDto,
  ) {
    return this.matchsGroupsService.update(+id, updateMatchsGroupsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchsGroupsService.remove(+id);
  }
}
