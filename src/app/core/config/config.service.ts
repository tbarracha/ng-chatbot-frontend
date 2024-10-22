import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChatbotOptions, ChatbotSettings } from '../chatbot/chatbot-models/chatbot-settings';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any;

  constructor(private readonly http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get('/assets/config/chatbot.config.json').pipe(
      tap((config) => {
        this.config = config;
        console.log('Config loaded:', this.config);
      })
    );
  }

  getConfig() {
    return this.config;
  }

  formatConnectionName(connectionName: string): string {
    return connectionName.toLowerCase().replace(/[\s_]/g, '');
  }

  // ----------------------------------------------
  // Organization
  // ----------------------------------------------
  get organizationLogo(): string {
    return this.config?.organization?.logo ?? '';
  }

  get organizationLogoDark(): string {
    return this.config?.organization?.logoDark ?? this.organizationLogo;
  }

  get organizationName(): string {
    return this.config?.organization?.name ?? '';
  }

  get organizationUrl(): string {
    return this.config?.organization?.url ?? '';
  }

  // ----------------------------------------------
  // API Settings
  // ----------------------------------------------
  get apiConnectionName(): string {
    return this.config?.apiSettings?.connectionSettings?.connectionName ?? '';
  }

  get activeApiConnection(): any {
    const connectionName = this.apiConnectionName;
    return this.config?.apiSettings?.connectionSettings?.connections.find(
      (connection: any) => connection.name === connectionName
    );
  }

  get chatUrl(): string {
    return this.activeApiConnection?.chatURL ?? '';
  }

  get feedbackUrl(): string {
    return this.activeApiConnection?.feedbackURL ?? '';
  }

  getApiConnectionByName(connectionName: string): any {
    return this.config?.apiSettings?.connectionSettings?.connections.find(
      (connection: any) => this.formatConnectionName(connection.name) === connectionName
    ) ?? null;
  }

  getModelsUrlByConnectionName(connectionName: string): string {
    const connection = this.getApiConnectionByName(connectionName);
    return connection?.availableModelsURL ?? '';
  }

  getChatUrlByConnectionName(connectionName: string): string {
    const connection = this.getApiConnectionByName(connectionName);
    return connection?.chatURL ?? '';
  }

  getFeedbackUrlByConnectionName(connectionName: string): string {
    const connection = this.getApiConnectionByName(connectionName);
    return connection?.feedbackURL ?? '';
  }

  // ----------------------------------------------
  // DTO Mapping
  // ----------------------------------------------
  get promptDTO(): any {
    return this.config?.apiSettings?.dtoMapping?.request?.promptDTO ?? {};
  }

  get feedbackDTO(): any {
    return this.config?.apiSettings?.dtoMapping?.request?.feedbackDTO ?? {};
  }

  get promptResponseDTO(): any {
    return this.config?.apiSettings?.dtoMapping?.response?.promptDTO ?? {};
  }

  get promptAnswerResponseDTO(): any {
    return this.config?.apiSettings?.dtoMapping?.response?.promptAnswerDTO ?? {};
  }

  get feedbackResponseDTO(): any {
    return this.config?.apiSettings?.dtoMapping?.response?.feedbackDTO ?? {};
  }

  // ----------------------------------------------
  // Chatbot Settings
  // ----------------------------------------------
  get chatbotSettings(): ChatbotSettings {
    const settings = this.config?.chatbotSettings ?? {};
  
    // Determine which options to use based on optionsLevel
    const options =
      settings.optionsLevel === 'simple'
        ? this.getSimpleChatbotOptions()
        : this.getCompleteChatbotOptions();
  
    // Return an instance of ChatbotSettings
    return new ChatbotSettings(
      settings.model ?? 'defaultModel',
      settings.apiProvider ?? 'defaultApiProvider',
      settings.stream ?? false,
      settings.useOptions ?? false,
      options
    );
  }

  get chatbotModel(): string {
    return this.config?.chatbotSettings?.model ?? '';
  }

  get chatbotApiProvider(): string {
    return this.config?.chatbotSettings?.apiProvider ?? '';
  }

  get isStreamingEnabled(): boolean {
    return this.config?.chatbotSettings?.stream ?? false;
  }

  get useOptions(): boolean {
    return this.config?.chatbotSettings?.useOptions ?? false;
  }

  get chatbotOptionsLevel(): string {
    return this.config?.chatbotSettings?.optionsLevel ?? 'simple';
  }

  get chatbotOptions(): ChatbotOptions {
    return this.config?.chatbotSettings?.options ?? {};
  }

  getSimpleChatbotOptions(): ChatbotOptions {
    const options = this.chatbotOptions;
    return {
      seed: options?.seed ?? 0,
      top_k: options?.top_k ?? 20,
      top_p: options?.top_p ?? 0.9,
      temperature: options?.temperature ?? 0.8,
      repeat_penalty: options?.repeat_penalty ?? 1.2,
      stop: options?.stop ?? [],
    };
  }
  
  // Get the complete chatbot options
  getCompleteChatbotOptions(): ChatbotOptions {
    return {
      seed: this.chatbotOptions?.seed ?? 0,
      top_k: this.chatbotOptions?.top_k ?? 20,
      top_p: this.chatbotOptions?.top_p ?? 0.9,
      temperature: this.chatbotOptions?.temperature ?? 0.8,
      repeat_penalty: this.chatbotOptions?.repeat_penalty ?? 1.2,
      stop: this.chatbotOptions?.stop ?? [],
      
      // Optional fields
      num_keep: this.chatbotOptions?.num_keep ?? null,
      num_predict: this.chatbotOptions?.num_predict ?? null,
      min_p: this.chatbotOptions?.min_p ?? null,
      tfs_z: this.chatbotOptions?.tfs_z ?? null,
      typical_p: this.chatbotOptions?.typical_p ?? null,
      repeat_last_n: this.chatbotOptions?.repeat_last_n ?? null,
      presence_penalty: this.chatbotOptions?.presence_penalty ?? null,
      frequency_penalty: this.chatbotOptions?.frequency_penalty ?? null,
      mirostat: this.chatbotOptions?.mirostat ?? null,
      mirostat_tau: this.chatbotOptions?.mirostat_tau ?? null,
      mirostat_eta: this.chatbotOptions?.mirostat_eta ?? null,
      penalize_newline: this.chatbotOptions?.penalize_newline ?? null,
      numa: this.chatbotOptions?.numa ?? null,
      num_ctx: this.chatbotOptions?.num_ctx ?? null,
      num_batch: this.chatbotOptions?.num_batch ?? null,
      num_gpu: this.chatbotOptions?.num_gpu ?? null,
      main_gpu: this.chatbotOptions?.main_gpu ?? null,
      low_vram: this.chatbotOptions?.low_vram ?? null,
      f16_kv: this.chatbotOptions?.f16_kv ?? null,
      vocab_only: this.chatbotOptions?.vocab_only ?? null,
      use_mmap: this.chatbotOptions?.use_mmap ?? null,
      use_mlock: this.chatbotOptions?.use_mlock ?? null,
      num_thread: this.chatbotOptions?.num_thread ?? null,
    };
  }

  get prePrompt(): string {
    return this.config?.prePrompt ?? '';
  }

  // ----------------------------------------------
  // Layout Settings
  // ----------------------------------------------
  get allowCopyInChatbotPrompt(): boolean {
    return this.config?.layout?.chatbotPrompt?.allowCopy ?? false;
  }

  get isFeedbackActive(): boolean {
    return this.config?.layout?.chatbotPromptAnswer?.promptFeedback?.active ?? false;
  }

  get feedbackStyle(): string {
    return this.config?.layout?.chatbotPromptAnswer?.promptFeedback?.style ?? 'rating';
  }

  get maxRating(): number {
    return this.config?.layout?.chatbotPromptAnswer?.promptFeedback?.maxRating ?? 5;
  }

  get isSidePanelActive(): boolean {
    return this.config?.layout?.sidePanel?.active ?? true;
  }

  get sidePanelPosition(): string {
    return this.config?.layout?.sidePanel?.position ?? 'left';
  }

  get sidePanelWidth(): string {
    return this.config?.layout?.sidePanel?.width ?? '300px';
  }

  get sidePanelMinWidth(): string {
    return this.config?.layout?.sidePanel?.minWidth ?? '200px';
  }

  get sidePanelMaxWidth(): string {
    return this.config?.layout?.sidePanel?.maxWidth ?? '400px';
  }
}
