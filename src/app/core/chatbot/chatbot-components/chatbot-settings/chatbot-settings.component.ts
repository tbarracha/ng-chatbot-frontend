import { Component } from '@angular/core';
import { SelectorComponent } from '../../../common/components/selector/selector.component';
import { BlankModalComponent } from "../../../common/components/blank-modal/blank-modal.component";
import { ChatbotModelSelectorComponent } from "../chatbot-model-selector/chatbot-model-selector.component";
import { ChatbotBaseComponentComponent } from '../chatbot-base-component/chatbot-base-component.component';
import { EventService } from '../../../common/services/event-service/event.service';
import { ChatbotApiService } from '../../chatbot-services/chatbot-api/chatbot-api.service';
import { ChatbotEventService } from '../../chatbot-services/chatbot-events/chatbot-event.service';
import { ChatbotSessionService } from '../../chatbot-services/chatbot-session/chatbot-session.service';

@Component({
  selector: 'app-chatbot-settings',
  standalone: true,
  imports: [SelectorComponent, BlankModalComponent, ChatbotModelSelectorComponent],
  templateUrl: './chatbot-settings.component.html',
  styleUrl: './chatbot-settings.component.scss'
})
export class ChatbotSettingsComponent extends ChatbotBaseComponentComponent {
  
  constructor(
    eventService: EventService,
    chatbotEventService: ChatbotEventService,
    chatbotSessionService: ChatbotSessionService,
    chatbotApiService: ChatbotApiService,
  ) {
    super(eventService, chatbotEventService, chatbotSessionService, chatbotApiService);

    
  }
}
