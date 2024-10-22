import { Injectable } from '@angular/core';
import { EventService } from '../../../common/services/event-service/event.service';
import { ChatbotApiService } from '../chatbot-api/chatbot-api.service';
import { ChatbotEventService } from '../chatbot-events/chatbot-event.service';
import { ChatbotSessionService } from '../chatbot-session/chatbot-session.service';
import {
  ChatbotOptionsLevel,
  ChatbotSettings,
} from '../../chatbot-models/chatbot-settings';
import { ConfigService } from '../../../config/config.service';
import { SelectorOption } from '../../../common/components/input-components/input-selector/input-selector.component';

@Injectable({
  providedIn: 'root',
})
export class ChatbotBrainService {
  public static chatbotSettings: ChatbotSettings;

  private readonly LOCAL_STORAGE_KEY = 'chatbotSettings';

  constructor(
    public readonly configService: ConfigService,
    public readonly eventService: EventService,
    public readonly chatbotEventService: ChatbotEventService,
    public readonly chatbotSessionService: ChatbotSessionService,
    public readonly chatbotApiService: ChatbotApiService
  ) {
    this.loadChatbotSettings();
    chatbotEventService.onSaveChatbotSettings.subscribe(() => {
      this.saveChatbotSettings();
    });

    eventService.selectorClickedEvt.subscribe(({ selectorId, selectedOption }) => {
      this.filterSelectorEvent(selectorId, selectedOption);
    });
  }
  
  filterSelectorEvent(selectorId: string, selectedOption: SelectorOption): void {
    console.log('Selector ID:', (selectorId == '') ? '\'undefined\'' : "'" + selectorId + "'",
              '\nSelector Option:', selectedOption);

    if (selectorId === 'chatbot_model') {
      ChatbotBrainService.chatbotSettings.model = selectedOption.value;
    }
    else if (selectorId === 'chatbot_connection_name') {
      ChatbotBrainService.chatbotSettings.connectionName = selectedOption.value;
      this.chatbotEventService.onChatbotApiConnectionNameChanged.emit(selectedOption.value);
    }
    else if (selectorId === 'chatbot_stream') {
      ChatbotBrainService.chatbotSettings.stream = selectedOption.value.toLowerCase() === 'true';
    }
    else if (selectorId === 'chatbot_use_options') {
      ChatbotBrainService.chatbotSettings.useOptions = selectedOption.value.toLowerCase() === 'true';
    }

    console.log('Chatbot Settings:', ChatbotBrainService.chatbotSettings);
  }

  // Load chatbot settings from local storage, or use the config defaults if no saved settings
  private loadChatbotSettings() {
    const savedSettings = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    if (savedSettings) {
      // Parse and load settings from local storage if found
      ChatbotBrainService.chatbotSettings = JSON.parse(savedSettings);
    } else {
      // Use the configService settings if no saved settings
      ChatbotBrainService.chatbotSettings = new ChatbotSettings(
        this.configService.chatbotModel,
        this.configService.apiConnectionName,
        this.configService.isStreamingEnabled,
        this.configService.useOptions,
        this.configService.chatbotOptionsLevel === ChatbotOptionsLevel.Simple
          ? this.configService.getSimpleChatbotOptions() ?? ChatbotSettings.simpleDefaultOptions
          : this.configService.getCompleteChatbotOptions() ?? ChatbotSettings.completeDefaultOptions
      );
    }

    console.log('Chatbot Settings loaded:', ChatbotBrainService.chatbotSettings);
  }

  // Save the current chatbot settings to local storage
  private saveChatbotSettings() {
    const settingsToSave = JSON.stringify(ChatbotBrainService.chatbotSettings);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, settingsToSave);
    console.log('Chatbot Settings saved to local storage:', ChatbotBrainService.chatbotSettings);
  }

  public static updateChatbotModel(newModel: string): void {
    ChatbotBrainService.chatbotSettings.model = newModel;
  }

  public static updateChatbotApiProvider(newAPI: string): void {
    ChatbotBrainService.chatbotSettings.connectionName = newAPI;
  }

  public static updateChatbotStream(shouldStream: boolean): void {
    ChatbotBrainService.chatbotSettings.stream = shouldStream;
  }

  public static updateChatbotSettings(newSettings: ChatbotSettings): void {
    ChatbotBrainService.chatbotSettings = newSettings;
  }
}
