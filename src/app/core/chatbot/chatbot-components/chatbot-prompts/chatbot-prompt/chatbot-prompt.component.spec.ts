import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotPromptComponent } from './chatbot-prompt.component';

describe('ChatbotPromptComponent', () => {
  let component: ChatbotPromptComponent;
  let fixture: ComponentFixture<ChatbotPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
