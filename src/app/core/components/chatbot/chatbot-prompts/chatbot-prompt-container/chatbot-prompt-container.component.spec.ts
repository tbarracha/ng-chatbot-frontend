import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotPromptContainerComponent } from './chatbot-prompt-container.component';

describe('ChatbotPromptContainerComponent', () => {
  let component: ChatbotPromptContainerComponent;
  let fixture: ComponentFixture<ChatbotPromptContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotPromptContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotPromptContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
