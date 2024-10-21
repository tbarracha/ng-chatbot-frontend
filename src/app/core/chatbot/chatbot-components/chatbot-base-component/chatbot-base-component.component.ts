import { Component } from '@angular/core';
import { ChatbotBrainService } from '../../chatbot-services/chatbot-brain/chatbot-brain.service';

@Component({
  selector: 'app-chatbot-base-component',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-base-component.component.html',
  styleUrl: './chatbot-base-component.component.scss'
})
export class ChatbotBaseComponentComponent {

  constructor(
    public readonly brain: ChatbotBrainService
  ) {

  }
}
