import { TestBed } from '@angular/core/testing';

import { ChatbotApiService } from './chatbot-api.service';

describe('ChatbotApiService', () => {
  let service: ChatbotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
