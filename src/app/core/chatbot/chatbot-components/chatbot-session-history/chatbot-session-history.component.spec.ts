import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotSessionHistoryComponent } from './chatbot-session-history.component';

describe('ChatbotSessionHistoryComponent', () => {
  let component: ChatbotSessionHistoryComponent;
  let fixture: ComponentFixture<ChatbotSessionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotSessionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotSessionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
