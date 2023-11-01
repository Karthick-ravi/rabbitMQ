import { ClientProxy } from '@nestjs/microservices';
export declare class RabbitMQPublisherService {
    private readonly client;
    constructor(client: ClientProxy);
    publishToRabbitMQ(data: any): Promise<void>;
}
