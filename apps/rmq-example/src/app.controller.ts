import { Controller, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'messages_queue',  // Ensure queue name matches
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  @Get('send')
  sendMessage() {
    const message = { text: 'Hello from Microservice 1' };
    return this.client.send('message_queue', message);  // Ensure pattern matches
  }
}