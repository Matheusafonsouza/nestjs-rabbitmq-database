import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService){}

  @Get('/log-error')
  async log(){
    return this.appService.logError();
  }

  @RabbitSubscribe({
    exchange: 'log_exchange',
    routingKey: 'log.*',
    queue: 'log_queue',
  })
  getLog(msg: {}) {
    console.log(`[LOG] - ${JSON.stringify(msg)}`)
  }

}
