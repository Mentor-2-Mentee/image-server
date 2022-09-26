import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(configuration().apiServerPort, '0.0.0.0');
  console.log('image-server start');
}
bootstrap();
