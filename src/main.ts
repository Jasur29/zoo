import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // modullar turli dependencilarni amalga oshirish uchun
  await app.listen(3000);
}
bootstrap();
