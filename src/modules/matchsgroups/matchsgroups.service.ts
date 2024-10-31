import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, User } from '@prisma/client';
import { MatchGroup } from '.prisma/client';

@Injectable()
export class MatchGroupService {
  constructor(private prisma: PrismaService) {}
  async create(
    data: Prisma.MatchGroupCreateInput,
    userId: number,
  ): Promise<MatchGroup> {
    const existingMatchGroup = await this.prisma.matchGroup.findUnique({
      where: { name: data.name },
    });

    if (existingMatchGroup) {
      throw new ConflictException('Grupo já cadastrado');
    }

    const existingGroup = await this.prisma.matchGroup.findFirst({
      where: { adminId: userId },
    });

    if (existingGroup) {
      throw new ConflictException(
        'O usuário já possui um grupo criado e não pode criar outro.',
      );
    }

    return this.prisma.matchGroup.create({
      data: {
        name: data.name,
        adminId: userId,
        users: {
          create: {
            userId,
            role: 'admin',
          },
        },
      },
    });
  }

  async findAll(): Promise<MatchGroup[]> {
    return this.prisma.matchGroup.findMany();
  }

  async findOne(id: number): Promise<MatchGroup> {
    try {
      if (typeof id !== 'number' || isNaN(id)) {
        throw new BadRequestException('O ID deve ser um número válido.');
      }
      const matchGroup = await this.prisma.matchGroup.findUnique({
        where: { id },
      });

      if (!matchGroup) {
        throw new NotFoundException('Usuário não encontrado.');
      }
      return matchGroup;
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    data: Prisma.MatchGroupUpdateInput,
  ): Promise<MatchGroup> {
    try {
      const matchGroup = await this.prisma.matchGroup.findUnique({
        where: { id },
      });
      if (!matchGroup) {
        throw new NotFoundException(`Grupo de partidas não encontrado.`);
      }

      if (data.name) {
        const existingMatchGroup = await this.prisma.matchGroup.findUnique({
          where: { name: data.name as string },
        });

        if (existingMatchGroup && existingMatchGroup.id !== id) {
          throw new ConflictException('Email já cadastrado');
        }
      }

      return await this.prisma.matchGroup.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<MatchGroup> {
    const matchGroup = await this.prisma.matchGroup.findUnique({
      where: { id },
    });

    if (!matchGroup) {
      throw new NotFoundException(
        `Grupo de partidas com o Id ${id} não encontrado.`,
      );
    }

    return await this.prisma.matchGroup.delete({
      where: { id },
    });
  }
}
