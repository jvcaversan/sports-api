import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, User } from '@prisma/client';
import { Match, MatchGroup } from '.prisma/client';
import { CreateMatchDto } from './dto/create-match.dto';

@Injectable()
export class MatchsService {
  constructor(private prisma: PrismaService) {}
  async create(createMatchDto: CreateMatchDto, userId: number): Promise<Match> {
    const { matchGroupId, ...matchData } = createMatchDto;

    // Verifica se o grupo de partidas existe
    const matchGroup = await this.prisma.matchGroup.findUnique({
      where: { id: matchGroupId },
      include: { users: true }, // Inclui os usuários no grupo para verificar a função
    });

    if (!matchGroup) {
      throw new NotFoundException('Match group not found');
    }

    // Verifica se o usuário é um admin ou moderador do grupo
    const userInGroup = matchGroup.users.find((user) => user.userId === userId);
    if (
      !userInGroup ||
      (userInGroup.role !== 'admin' && userInGroup.role !== 'moderator')
    ) {
      throw new NotFoundException(
        'User is not authorized to create a match in this group',
      );
    }

    // Cria a partida
    return this.prisma.match.create({
      data: {
        ...matchData,
        matchGroup: { connect: { id: matchGroupId } },
        createdBy: { connect: { id: userId } },
      },
    });
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
