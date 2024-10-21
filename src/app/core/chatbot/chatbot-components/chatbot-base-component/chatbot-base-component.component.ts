import { Component } from '@angular/core';
import { ChatbotApiService } from '../../chatbot-services/chatbot-api/chatbot-api.service';
import { ChatbotEventService } from '../../chatbot-services/chatbot-events/chatbot-event.service';
import { ChatbotSessionService } from '../../chatbot-services/chatbot-session/chatbot-session.service';
import { SelectorOption } from '../../../common/components/selector/selector.component';
import { EventService } from '../../../common/services/event-service/event.service';

@Component({
  selector: 'app-chatbot-base-component',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-base-component.component.html',
  styleUrl: './chatbot-base-component.component.scss'
})
export class ChatbotBaseComponentComponent {

  constructor(
    public readonly eventService: EventService,
    public readonly chatbotEventService: ChatbotEventService,
    public readonly chatbotSessionService: ChatbotSessionService,
    public readonly chatbotApiService: ChatbotApiService,
  ) {

  }
}
