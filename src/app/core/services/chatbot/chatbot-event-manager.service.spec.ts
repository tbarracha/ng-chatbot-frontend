import { TestBed } from '@angular/core/testing';

import { ChatbotEventManagerService } from './chatbot-event-manager.service';

describe('ChatbotEventManagerService', () => {
  let service: ChatbotEventManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotEventManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
