import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
