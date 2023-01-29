import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService){}

  @Get('/log-error')
  @ApiResponse({ status: 200, description: 'Successfully created log on service.' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error. '})
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
