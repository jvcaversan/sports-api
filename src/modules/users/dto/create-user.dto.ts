import { Type } from 'class-transformer';
import { IsEmail, IsEnum, IsOptional, IsStrongPassword } from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateUserDto {
  @IsEmail({}, { message: 'Por favor, insira um email válido.' })
  email: string;

  @IsStrongPassword(
    {},
    {
      message:
        'Senha Inválida, a senha deve conter no mínimo 8 caracteres, um caracter especial e uma letra maiúscula',
    },
  )
  password: string;

  @Type(() => Number)
  @IsOptional()
  @IsEnum(Role)
  role: number;
}
