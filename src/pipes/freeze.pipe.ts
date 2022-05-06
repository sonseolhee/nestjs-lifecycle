import {
  ArgumentMetadata,
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * PIPES
 * - transforming incoming data
 * - validating incoming data
 */
@Injectable()
export class FreezePipe implements PipeTransform {
  private readonly logger = new Logger(FreezePipe.name);

  transform(value: any) {
    this.logger.debug('FreezePipe running...');
    Object.freeze(value);
    return value;
  }
}
