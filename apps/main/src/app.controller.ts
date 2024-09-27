import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit {
  constructor(@Inject('TEXT_SERVICE') private readonly client: ClientProxy) {}

  async onModuleInit() {
    await this.client.connect();
    this.sendMessage();
  }

  sendMessage() {
    const message = 'Hello from the producer!';

    this.client
      .send<string, string>('plain_text', message)
      .subscribe((response) => {
        console.log(`Response from consumer:`, response);
      });
  }
}
