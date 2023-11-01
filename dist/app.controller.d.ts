import { RabbitMQPublisherService } from './rabbitmq-publisher.service';
import { AppService } from './app.service';
export declare class AppController {
    private readonly httpService;
    private readonly rabbitMQPublisherService;
    constructor(httpService: AppService, rabbitMQPublisherService: RabbitMQPublisherService);
    publishToRabbitMQ(data: any): Promise<string>;
}
