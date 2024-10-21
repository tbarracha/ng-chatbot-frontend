import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotInputOptionsComponent } from './chatbot-input-options.component';

describe('ChatbotInputOptionsComponent', () => {
  let component: ChatbotInputOptionsComponent;
  let fixture: ComponentFixture<ChatbotInputOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotInputOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotInputOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
