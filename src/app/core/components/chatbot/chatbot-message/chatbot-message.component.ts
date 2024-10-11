import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatbot-message',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-message.component.html',
  styleUrl: './chatbot-message.component.scss'
})
export class ChatbotMessageComponent {
  @Input() message: string = '';
  @Input() role: string = 'assistant';
  @Input() avatar: string | null = null;
}
