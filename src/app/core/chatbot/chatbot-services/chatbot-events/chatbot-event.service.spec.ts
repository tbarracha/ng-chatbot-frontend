import { TestBed } from '@angular/core/testing';
import { ChatbotEventService } from './chatbot-event.service';


describe('ChatbotEventService', () => {
  let service: ChatbotEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
