import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class ConsumerService {
  @MessagePattern('messages_queue')  // Ensure pattern matches
  handleMessage(message: any) {
    console.log('Received message:', message);
    return { ack: 'Message received' };  // Ensure a response is sent back
  }
}