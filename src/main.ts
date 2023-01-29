import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('RabbitMQ database')
    .setDescription(
      'A api service that uses RabbitMQ to populate database tables.',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const PORT = 3000;
  const server = await app.listen(PORT);
  console.log(`============== server running in port ${PORT} ==============`);
  server.timeout = 1000 * 60 * 10;
}
bootstrap();
