import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotMessageVoteComponent } from './chatbot-message-vote.component';

describe('ChatbotMessageVoteComponent', () => {
  let component: ChatbotMessageVoteComponent;
  let fixture: ComponentFixture<ChatbotMessageVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotMessageVoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotMessageVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
