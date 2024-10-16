import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotPromptVoteComponent } from './chatbot-prompt-vote.component';

describe('ChatbotPromptVoteComponent', () => {
  let component: ChatbotPromptVoteComponent;
  let fixture: ComponentFixture<ChatbotPromptVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotPromptVoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotPromptVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
