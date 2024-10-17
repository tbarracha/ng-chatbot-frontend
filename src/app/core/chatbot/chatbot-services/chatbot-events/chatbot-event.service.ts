import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotEventService {
  readonly sidebarToggledEvt = new EventEmitter<void>();
  readonly sessionChangedEvt = new EventEmitter<void>();
  readonly promptSentEvt = new EventEmitter<void>();
  readonly promptAnswerReceivedEvt = new EventEmitter<void>();

  isSidebarOpen = true;

  constructor() {}
}
