import { TestBed } from '@angular/core/testing';

import { ChatbotSessionService } from './chatbot-session.service';

describe('ChatbotSessionService', () => {
  let service: ChatbotSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
