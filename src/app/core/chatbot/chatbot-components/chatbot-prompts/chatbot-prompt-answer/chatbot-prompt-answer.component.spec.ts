import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotPromptAnswerComponent } from './chatbot-prompt-answer.component';

describe('ChatbotPromptAnswerComponent', () => {
  let component: ChatbotPromptAnswerComponent;
  let fixture: ComponentFixture<ChatbotPromptAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotPromptAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotPromptAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
