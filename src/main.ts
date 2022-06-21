import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectionSource } from './database/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await connectionSource.initialize();
}
bootstrap();
