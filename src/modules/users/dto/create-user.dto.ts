import { IsEmail, IsStrongPassword } from 'class-validator';

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
}
