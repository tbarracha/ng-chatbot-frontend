import { TestBed } from '@angular/core/testing';

import { ChatbotMessageService } from './chatbot-message.service';

describe('ChatbotMessageService', () => {
  let service: ChatbotMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
