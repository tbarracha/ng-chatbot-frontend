import { Component, Input, input } from '@angular/core';
import { ChatbotMessageComponent } from "../chatbot-message/chatbot-message.component";

@Component({
  selector: 'app-chatbot-history',
  standalone: true,
  imports: [ChatbotMessageComponent],
  templateUrl: './chatbot-history.component.html',
  styleUrl: './chatbot-history.component.scss'
})
export class ChatbotHistoryComponent {
  @Input() messages = [
    { role: 'user', content: 'Hello, chatbot!' },
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
    { role: 'user', content: 'What’s the weather like?' },
    { role: 'assistant', content: 'It’s sunny and 75°F right now.' }
  ];
}
