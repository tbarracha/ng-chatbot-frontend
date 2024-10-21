import { Component } from '@angular/core';
import { SelectorComponent } from '../../../common/components/selector/selector.component';
import { BlankModalComponent } from "../../../common/components/blank-modal/blank-modal.component";
import { ChatbotModelSelectorComponent } from "../chatbot-model-selector/chatbot-model-selector.component";
import { ChatbotBaseComponentComponent } from '../chatbot-base-component/chatbot-base-component.component';
import { ChatbotBrainService } from '../../chatbot-services/chatbot-brain/chatbot-brain.service';

@Component({
  selector: 'app-chatbot-settings',
  standalone: true,
  imports: [SelectorComponent, BlankModalComponent, ChatbotModelSelectorComponent],
  templateUrl: './chatbot-settings.component.html',
  styleUrl: './chatbot-settings.component.scss'
})
export class ChatbotSettingsComponent extends ChatbotBaseComponentComponent {
  
  constructor(
    brain: ChatbotBrainService
  ) {
    super(brain);

    
  }
}
