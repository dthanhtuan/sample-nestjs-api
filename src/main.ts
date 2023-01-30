import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // add middleware
  app.useGlobalPipes(new ValidationPipe()); // add validation to use validator in DTO
  await app.listen(3002);
}
bootstrap();
