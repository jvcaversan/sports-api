import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(
    data: Prisma.UserCreateInput,
  ): Promise<{ message: string; user?: User }> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        throw new Error('Email já cadastrado');
      }

      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }

      await this.prisma.user.create({
        data,
      });
      return {
        message: 'Usuário Criado com Sucesso',
      };
    } catch (error) {
      if (error.message === 'Email já cadastrado') {
        throw new Error(error.message);
      }
      throw new Error(`Erro ao criar o usuário: ${error.message}`);
    }
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<{ message?: string; user?: User }> {
    try {
      if (isNaN(id)) {
        return {
          message: `O id fornecido é inválido. Deve ser um número.`,
        };
      }
      const numericId = Number(id);

      const user = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        return { message: `Usuário com esse id ${id} não encontrado` };
      }
      return { user };
    } catch (error) {
      return { message: `Erro ao buscar o usuário: ${error.message}` };
    }
  }

  async update(
    id: number,
    data: Prisma.UserUpdateInput,
  ): Promise<{ message?: string; user?: User }> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      });
      if (!user) {
        return { message: 'Usuário não encontrado' };
      }

      if (data.email) {
        const existingUser = await this.prisma.user.findUnique({
          where: { email: user.email },
        });

        if (existingUser && existingUser.id !== id) {
          return { message: 'Email já cadastrado' };
        }
      }

      if (data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
      }

      await this.prisma.user.update({
        where: { id },
        data,
      });
      return { message: 'Usuário atualizado com Sucesso' };
    } catch (error) {
      return { message: `Erro ao atualizar o usuário: ${error.message}` };
    }
  }

  async remove(id: number): Promise<{ message?: string; user?: User }> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return { message: 'Usuário não encontrado' };
    }

    await this.prisma.user.delete({
      where: { id },
    });

    return { message: 'Usuário deletado com Sucesso' };
  }
}
