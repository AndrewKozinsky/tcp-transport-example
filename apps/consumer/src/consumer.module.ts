import { Module } from '@nestjs/common'
import { AppController } from './consumer.controller'

@Module({
  controllers: [AppController],
})
export class AppModule {}