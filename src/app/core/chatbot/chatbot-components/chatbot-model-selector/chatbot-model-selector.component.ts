import { Component } from '@angular/core';
import { SelectorComponent, SelectorOption } from '../../../common/components/selector/selector.component';
import { EventService } from '../../../common/services/event-service/event.service';
import { ChatbotEventService } from '../../chatbot-services/chatbot-events/chatbot-event.service';
import { ChatbotSessionService } from '../../chatbot-services/chatbot-session/chatbot-session.service';

@Component({
  selector: 'app-chatbot-model-selector',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-model-selector.component.html',
  styleUrl: './chatbot-model-selector.component.scss'
})
export class ChatbotModelSelectorComponent extends SelectorComponent {
  constructor(
    eventService: EventService,
    readonly chatbotEventService: ChatbotEventService,
    readonly chatbotSessionService: ChatbotSessionService,
  ) {
    super(eventService);
  }

  override ngOnInit() {
    this.refreshOptions();
  }

  ngAfterViewInit() {
    this.refreshOptions();
  }

  get modelName(): string {
    return this.currentSelection?.value ?? 'Select Model...';
  }

  protected refreshOptions(): void {
    this.currentSelection = this.chatbotSessionService.selectedModel;
    this.options = this.chatbotSessionService.llmModels;
  }

  protected override filterSelectorEvent(selectorId: string, selectedOption: SelectorOption): void {
    if (selectorId === 'modelSelector') {
      this.currentSelection = selectedOption;
    }
  }
}
