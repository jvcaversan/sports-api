import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProfileModule } from '../profile/profile.module';
import { UsersRepository } from './users.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [ProfileModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService], // Exporta UsersService para uso em outros módulos
})
export class UsersModule {}
