import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(new AuthenticationMiddleware()); >> problem cuz we don't access to DI system if we register the middleware here
  await app.listen(3000);
}
bootstrap();
