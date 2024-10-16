import { Component } from '@angular/core';
import { ChatbotPromptContainerComponent } from '../chatbot-prompt-container/chatbot-prompt-container.component';

@Component({
  selector: 'app-chatbot-prompt',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-prompt.component.html',
  styleUrl: './chatbot-prompt.component.scss'
})
export class ChatbotPromptComponent extends ChatbotPromptContainerComponent {

}
