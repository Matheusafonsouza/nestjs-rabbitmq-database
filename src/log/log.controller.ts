import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { LogService } from './log.service';


@ApiTags('log')
@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService){}

  @Get('/error')
  @ApiResponse({ status: 200, description: 'Successfully created log on service.' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error. '})
  async log(){
    return this.logService.logError();
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
