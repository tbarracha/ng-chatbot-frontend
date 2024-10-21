import { Component } from '@angular/core';
import { ChatbotBaseComponentComponent } from '../../chatbot-base-component/chatbot-base-component.component';

@Component({
  selector: 'app-chatbot-input-options',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-input-options.component.html',
  styleUrl: './chatbot-input-options.component.scss'
})
export class ChatbotInputOptionsComponent extends ChatbotBaseComponentComponent {

  triggerOptionEvent(eventId: string) {
    this.eventService.userOptionsClickEvt.emit(eventId);
  }
}
