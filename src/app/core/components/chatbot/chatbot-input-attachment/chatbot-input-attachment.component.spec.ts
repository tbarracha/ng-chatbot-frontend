import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotInputAttachmentComponent } from './chatbot-input-attachment.component';

describe('ChatbotInputAttachmentComponent', () => {
  let component: ChatbotInputAttachmentComponent;
  let fixture: ComponentFixture<ChatbotInputAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotInputAttachmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotInputAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
