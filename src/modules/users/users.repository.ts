import { Injectable } from '@nestjs/common';
import { Prisma, Profile, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
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

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    });
  }

  async findById(id: number): Promise<User & { profile: Profile }> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
      },
    });
  }

  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async updateById(id: number, data: Prisma.UserUpdateInput): Promise<User> {
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
