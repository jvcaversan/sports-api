import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExcludePasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data && typeof data === 'object') {
          // Remove o campo `password` do objeto ou de uma lista de objetos
          if (Array.isArray(data)) {
            return data.map((item) => {
              const { password, ...rest } = item;
              return rest;
            });
          } else {
            const { password, ...rest } = data;
            return rest;
          }
        }
        return data;
      }),
    );
  }
}
