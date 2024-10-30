import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, User } from '@prisma/client';
import { Match, MatchGroup } from '.prisma/client';

@Injectable()
export class MatchsService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.MatchCreateInput): Promise<Match> {
    return this.prisma.match.create({ data });
  }

  async findAll(): Promise<Match[]> {
    return this.prisma.match.findMany();
  }

  async findOne(id: number): Promise<Match> {
    try {
      if (typeof id !== 'number' || isNaN(id)) {
        throw new BadRequestException('O ID deve ser um número válido.');
      }
      const match = await this.prisma.match.findUnique({
        where: { id },
      });

      if (!match) {
        throw new NotFoundException('Partida não encontrada.');
      }
      return match;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, data: Prisma.MatchUpdateInput): Promise<Match> {
    try {
      const match = await this.prisma.match.findUnique({
        where: { id },
      });
      if (!match) {
        throw new NotFoundException(`Partida não encontrado.`);
      }

      return await this.prisma.match.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<Match> {
    const match = await this.prisma.match.findUnique({
      where: { id },
    });

    if (!match) {
      throw new NotFoundException(`Partida com o Id ${id} não encontrado.`);
    }

    return await this.prisma.match.delete({
      where: { id },
    });
  }
}
