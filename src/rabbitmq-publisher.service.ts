import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQPublisherService {
  constructor(private readonly client: ClientProxy) {}

  async publishToRabbitMQ(data: any) {
    this.client.emit('your-action-name', data);
  }
}
