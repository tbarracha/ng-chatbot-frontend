import { Component } from '@angular/core';
import { ChatbotBrainService } from '../../chatbot-services/chatbot-brain/chatbot-brain.service';
import { ChatbotBaseComponentComponent } from '../chatbot-base-component/chatbot-base-component.component';
import { ChatbotSettings } from '../../chatbot-models/chatbot-settings';
import { BlankModalComponent } from "../../../common/components/blank-modal/blank-modal.component";
import { SelectorComponent } from "../../../common/components/selector/selector.component";
import { ChatbotModelSelectorComponent } from "../chatbot-model-selector/chatbot-model-selector.component";

@Component({
  selector: 'app-chatbot-settings',
  standalone: true,
  templateUrl: './chatbot-settings.component.html',
  styleUrls: ['./chatbot-settings.component.scss'],
  imports: [BlankModalComponent, SelectorComponent, ChatbotModelSelectorComponent]
})
export class ChatbotSettingsComponent extends ChatbotBaseComponentComponent {
  
  get chatbotSettings(): ChatbotSettings {
    return ChatbotBrainService.chatbotSettings;
  }

  constructor(
    brain: ChatbotBrainService
  ) {
    super(brain);
  }

  // Cast event.target to HTMLInputElement to access value safely
  onSeedChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    ChatbotBrainService.chatbotSettings.options.seed = Number(input.value);
  }

  onTopKChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    ChatbotBrainService.chatbotSettings.options.top_k = Number(input.value);
  }

  onTopPChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    ChatbotBrainService.chatbotSettings.options.top_p = Number(input.value);
  }

  onTemperatureChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    ChatbotBrainService.chatbotSettings.options.temperature = Number(input.value);
  }

  onRepeatPenaltyChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    ChatbotBrainService.chatbotSettings.options.repeat_penalty = Number(input.value);
  }

  onStopTokensChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    ChatbotBrainService.chatbotSettings.options.stop = input.value.split(',').map(token => token.trim());
  }
}
