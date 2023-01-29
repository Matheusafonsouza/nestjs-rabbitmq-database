import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly amqpConnection: AmqpConnection){}

  async logError(){
    this.amqpConnection.publish(
      'log_exchange',
      'log.error',
      { msg: 'Internal Server Error' }
    )
  }

}