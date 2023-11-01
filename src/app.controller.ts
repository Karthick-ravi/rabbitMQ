import { Controller, Post, Body } from '@nestjs/common';
import { RabbitMQPublisherService } from './rabbitmq-publisher.service';
import { AppService } from './app.service';


@Controller('rabbitMQ')
export class AppController {
  constructor(private readonly httpService: AppService,
    private readonly rabbitMQPublisherService: RabbitMQPublisherService) {}
  

  @Post('create')
  async publishToRabbitMQ(@Body() data: any) {
    data = await this.httpService.fetchDataFromThirdParty();
    this.rabbitMQPublisherService.publishToRabbitMQ(data);
    return 'JSON data published to RabbitMQ';
  }
}




