import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.log(AuthGuard.name);
    const request = context.switchToHttp().getRequest();
    // sth to do with authgaurd logic
    return true;
  }
}

/**
 * 3 ways to attach guards to application
 * 1. globally to our app at 'main.ts' > cannot access to DI system of Nestjs x
 * e.g app.useGlobalGuards(new AuthGuard)
 *
 * 2. DI system to be involved > put it in the controller level
 *
 * 3. DI system + Globally
 * put it in the app.module
 * providers : {
 *  provide: APP_GUARD,
 *  useClass: AuthGuard
 * }
 */
