import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class LogService {
  constructor(private readonly amqpConnection: AmqpConnection){}

  async logError(){
    this.amqpConnection.publish(
      'log_exchange',
      'log.error',
      { msg: 'Internal Server Error' }
    )
  }

}
