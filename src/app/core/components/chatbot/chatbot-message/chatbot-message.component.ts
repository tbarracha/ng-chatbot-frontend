import { Component, Input } from '@angular/core';
import { BaseThemedComponent } from '../../standalone/base-components/base-themed-component.component';

@Component({
  selector: 'app-chatbot-message',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-message.component.html',
  styleUrl: './chatbot-message.component.scss'
})
export class ChatbotMessageComponent extends BaseThemedComponent {
  @Input() message: string = '';
  @Input() isUser: boolean = false;
}
