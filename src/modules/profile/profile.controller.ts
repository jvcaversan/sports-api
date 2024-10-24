import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from '@prisma/client';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  findAll() {
    return this.profileService.getAllProfiles();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Profile> {
    return this.profileService.getProfileByUserId(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profileService.updateProfile(Number(id), data);
  }
}
