import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    Transport: Transport.REDIS,
    options: {
      url: "redis://localhost:6379"
    }
  })
  await app.startAllMicroservices()
  await app.listen(3000);
}
bootstrap();
