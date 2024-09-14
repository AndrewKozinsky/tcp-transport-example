import { Module } from '@nestjs/common'
import { ConsumerService } from './consumer.controller';

@Module({
  providers: [ConsumerService],
})
export class ConsumerModule {}