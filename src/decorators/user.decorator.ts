import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';

export const User = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (request.user) {
      if (filter) {
        // Divide o caminho de filtro (ex: "profile.id") e acessa cada propriedade
        const keys = filter.split('.');
        let result = request.user;
        for (const key of keys) {
          result = result?.[key];
          if (result === undefined) {
            throw new NotFoundException(
              `A propriedade "${filter}" não foi encontrada no usuário.`,
            );
          }
        }
        return result;
      } else {
        return request.user;
      }
    } else {
      throw new NotFoundException(
        'Usuário não encontrado no request. Use o AuthGuard para obter o usuário',
      );
    }
  },
);
