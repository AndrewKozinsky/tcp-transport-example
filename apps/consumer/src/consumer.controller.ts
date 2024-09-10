import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('plain_text')
  handlePlainTextMessage(message: string): string {
    console.log('Received message:', message);
    return 'Message received: ' + message; // Sends a response back
  }
}