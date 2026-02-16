import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { delay, Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    const request =  context.switchToHttp().getRequest();
    const response =  context.switchToHttp().getResponse();

    return next.handle().pipe(
      delay(500),
      tap(()=> {
        const duration = Date.now() - start;
        response.setHeader('X-Response-Time', `${duration}ms`);
        console.log(`handled: ${request.method} ${request.url} in ${duration}ms`);
      })
    );
  }
}
