import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})

export class ChatMessageComponent {
  @Input() role: string = 'assistant';
  @Input() message: string = '';
  @Input() avatar: string | null = null;
}
