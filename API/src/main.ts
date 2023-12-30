import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true
  }));
  const config = new DocumentBuilder()
         .setTitle('Hotel4u')
         .setDescription('The Hotel4u API description')
         .setVersion('1.0')
         .addTag('Hotels')
         .build();
       const document = SwaggerModule.createDocument(app, config);
       SwaggerModule.setup('api', app, document);

       app.enableCors({
        origin: 'http://localhost:8080', // or true to allow any origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      });
      
  await app.listen(3000);
}
bootstrap();
