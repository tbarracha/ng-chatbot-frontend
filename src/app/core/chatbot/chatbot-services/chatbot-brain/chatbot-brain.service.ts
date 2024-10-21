import { Injectable } from '@angular/core';
import { EventService } from '../../../common/services/event-service/event.service';
import { ChatbotApiService } from '../chatbot-api/chatbot-api.service';
import { ChatbotEventService } from '../chatbot-events/chatbot-event.service';
import { ChatbotSessionService } from '../chatbot-session/chatbot-session.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotBrainService {

  constructor(
    public readonly eventService: EventService,
    public readonly chatbotEventService: ChatbotEventService,
    public readonly chatbotSessionService: ChatbotSessionService,
    public readonly chatbotApiService: ChatbotApiService
  ) { }
}
