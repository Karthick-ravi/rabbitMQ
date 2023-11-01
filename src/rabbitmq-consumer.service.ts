import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class RabbitMQConsumerService {
  @MessagePattern('your-action-name')
  handleMessage(data: any) {
    console.log('Received data from RabbitMQ:', data);
  }
}
