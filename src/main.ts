import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PORT = 3000;
  const server = await app.listen(PORT);
  console.log(`============== server running in port ${PORT} ==============`);
  server.timeout = 1000 * 60 * 10;
}
bootstrap();
