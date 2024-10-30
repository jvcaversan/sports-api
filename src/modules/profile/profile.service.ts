import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Profile } from '@prisma/client'; // Importe o tipo Profile
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getAllProfiles() {
    return this.prisma.profile.findMany();
  }

  async getProfileByUserId(userId: number) {
    try {
      if (typeof userId !== 'number' || isNaN(userId)) {
        throw new BadRequestException('O ID deve ser um número válido.');
      }
      const profile = await this.prisma.profile.findUnique({
        where: { userId },
      });

      if (!profile) {
        throw new NotFoundException('Perfil não encontrado.');
      }
      return profile;
    } catch (error) {
      throw error;
    }
  }

  async updateProfile(userId: number, data: Partial<Profile>) {
    return this.prisma.profile.update({
      where: { userId },
      data,
    });
  }
}
