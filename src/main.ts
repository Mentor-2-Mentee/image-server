import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9318, '0.0.0.0');
  console.log('image-server start');
}
bootstrap();
