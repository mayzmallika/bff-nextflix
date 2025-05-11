import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('NEXTFLIX-BFF-API')
    .setDescription('Free Movie API - OMDb API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document); // http://localhost:3001/swagger

  await app.listen(3001);
}
bootstrap();