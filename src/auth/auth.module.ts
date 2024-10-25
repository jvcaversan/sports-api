import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/modules/users/users.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [
    JwtModule.register({
      secret: '=d|uIh]]d)M@sU^U"]Yq4EFL.}YQ@~WG',
    }),
    PrismaModule,
    forwardRef(() => UsersModule), // Garante que UsersModule esteja disponível
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // Certifique-se de exportar o AuthService
})
export class AuthModule {}
