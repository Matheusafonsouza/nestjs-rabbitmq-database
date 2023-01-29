import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { LogModule } from './log/log.module';


@Module({
  imports: [LogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
