import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatbot-prompt-container',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-prompt-container.component.html',
  styleUrl: './chatbot-prompt-container.component.scss'
})

export class ChatbotPromptContainerComponent {
  @Input() role: string = 'assistant';
  @Input() message: string = '';
  @Input() avatar: string | null = null;
}
