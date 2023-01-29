import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { LogController } from './log.controller';
import { LogService } from './log.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'log_exchange',
          type: 'topic',
        },
      ],
      uri: 'amqp://root:root@localhost:5672',
      connectionInitOptions: { wait: false },
      enableControllerDiscovery: true
    }),
  ],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule {}
