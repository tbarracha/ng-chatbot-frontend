import { TestBed } from '@angular/core/testing';

import { ChatbotBrainService } from './chatbot-brain.service';

describe('ChatbotBrainService', () => {
  let service: ChatbotBrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotBrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
