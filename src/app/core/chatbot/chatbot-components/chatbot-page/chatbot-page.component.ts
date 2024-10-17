import { Component } from '@angular/core';
import { ChatbotApiService } from '../../chatbot-services/chatbot-api/chatbot-api.service';
import { ChatbotEventService } from '../../chatbot-services/chatbot-events/chatbot-event.service';
import { ChatbotSessionService } from '../../chatbot-services/chatbot-session/chatbot-session.service';
import { SelectorOption } from '../../../common/components/selector/selector.component';

@Component({
  selector: 'app-chatbot-page',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-page.component.html',
  styleUrl: './chatbot-page.component.scss'
})
export class ChatbotPageComponent {

  llmModels: SelectorOption[] = [
    { id: 1, value: 'GPT-3.5' },
    { id: 2, value: 'GPT-4' },
    { id: 3, value: 'BERT' }
  ];

  selectedModel!: SelectorOption;

  constructor(
    protected readonly chatbotEventService: ChatbotEventService,
    protected readonly chatbotSessionService: ChatbotSessionService,
    protected readonly chatbotApiService: ChatbotApiService,
  ) {

  }

  onModelSelected(model: SelectorOption) {
    this.selectedModel = model;
    console.log('Selected LLM model:', model);
  }
}
