import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotHistoryComponent } from './chatbot-history.component';

describe('ChatbotHistoryComponent', () => {
  let component: ChatbotHistoryComponent;
  let fixture: ComponentFixture<ChatbotHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
