import { Injectable } from '@nestjs/common';
import { Prisma, Profile, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        profile: {
          create: {
            name: '',
          },
        },
      },
      include: {
        profile: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
        createdGroups: true,
        matchGroups: {
          include: {
            matchGroup: true, // Inclui informações do grupo
            user: true, // Informações do usuário associadas
          },
        },
      },
    });
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async updateById(id: number, data: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async removeUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async removeProfile(userId: number) {
    return this.prisma.profile.delete({
      where: { userId },
    });
  }
}
