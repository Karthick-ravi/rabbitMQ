import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { RabbitMQConsumerService } from './rabbitmq-consumer.service';
import { RabbitMQPublisherService } from './rabbitmq-publisher.service';

@Module({
  imports: [
],
  controllers: [AppController],
  providers: [AppService, RabbitMQConsumerService, RabbitMQPublisherService]
 
})
export class AppModule {}
