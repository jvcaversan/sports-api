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
  ForbiddenException,
} from '@nestjs/common';
import { MatchsService } from './matchs.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('matchs')
export class MatchsController {
  constructor(private readonly matchsService: MatchsService) {}

  @Post()
  async create(@Body() createMatchDto: CreateMatchDto, @Request() req) {
    const userId = req.user.id;
    return this.matchsService.create(createMatchDto, userId);
  }

  @Get()
  findAll() {
    return this.matchsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchsService.update(+id, updateMatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchsService.remove(+id);
  }
}
