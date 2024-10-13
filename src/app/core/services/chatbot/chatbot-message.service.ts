import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotMessageService {

  constructor() { }

  sendMessage(message: string): void {
    console.log('Sending message:', message);
  }

  handleFileDrop(file: File): void {
    console.log('Handling dropped file:', file);
  }
}
