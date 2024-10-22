import { Component } from '@angular/core';
import { InputSelectorComponent, SelectorOption } from '../../../common/components/input-components/input-selector/input-selector.component';
import { EventService } from '../../../common/services/event-service/event.service';
import { ChatbotBrainService } from '../../chatbot-services/chatbot-brain/chatbot-brain.service';

@Component({
  selector: 'app-chatbot-model-selector',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-model-selector.component.html',
  styleUrl: './chatbot-model-selector.component.scss'
})
export class ChatbotModelSelectorComponent extends InputSelectorComponent {
  constructor(
    eventService: EventService,
    readonly brain: ChatbotBrainService
  ) {
    super();
    this.onValueChange.subscribe((value) => eventService.selectorClickedEvt.emit({ selectorId: this.inputID, selectedOption: value }));
    eventService.selectorClickedEvt.subscribe((event) => this.filterSelectorEvent(event.selectorId, event.selectedOption));
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
    this.currentSelection = this.brain.chatbotSessionService.selectedModel;
    this.options = this.brain.chatbotSessionService.llmModels;
  }

  protected override filterSelectorEvent(selectorId: string, selectedOption: SelectorOption): void {
    if (selectorId === 'modelSelector') {
      this.currentSelection = selectedOption;
    }
  }
}
