import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEXT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001, // The consumer listens on port 3001
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}