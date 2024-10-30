import { UsersRepository } from './users.repository';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  async createUser(data: CreateUserDto) {
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictException('Email já cadastrado');
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const user = await this.userRepository.create(data);

    delete user.password;

    return user;
  }

  async findAllUsers() {
    const users = await this.userRepository.findAllUsers();

    return users;
  }

  async findById(id: number) {
    try {
      if (typeof id !== 'number' || isNaN(id)) {
        throw new BadRequestException('O ID deve ser um número válido.');
      }
      const user = await this.userRepository.findById(id);

      if (!user) {
        throw new NotFoundException('Usuário não encontrado.');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, data: Prisma.UserUpdateInput) {
    try {
      const user = await this.userRepository.findById(id);
      if (!user) {
        throw new NotFoundException(`Usuário não encontrado.`);
      }

      if (data.email) {
        const existingUser = await this.userRepository.findByEmail(
          data.email as string,
        );

        if (existingUser && existingUser.id !== id) {
          throw new ConflictException('Email já cadastrado');
        }
      }

      if (data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
      }

      if (typeof data.role === 'string') {
        data.role = parseInt(data.role, 10); // Converte para número
      }

      return await this.userRepository.updateById(id, data);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    if (typeof id !== 'number' || isNaN(id)) {
      throw new BadRequestException('O ID deve ser um número válido.');
    }

    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`Usuário com o Id ${id} não encontrado.`);
    }

    if (user.profile) {
      await this.userRepository.removeProfile(id);
    }

    await this.userRepository.removeUser(id);

    return { message: 'Usuario Deletado com sucesso' };
  }
}
