import { IsJWT, IsStrongPassword } from 'class-validator';

export class AuthResetDto {
  @IsStrongPassword(
    {},
    {
      message:
        'Senha Inválida, a senha deve conter no mínimo 8 caracteres, um caracter especial e uma letra maiúscula',
    },
  )
  password: string;

  @IsJWT()
  token: string;
}
