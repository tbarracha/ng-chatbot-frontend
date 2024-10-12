import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotUserOptionsComponent } from './chatbot-user-options.component';

describe('ChatbotUserOptionsComponent', () => {
  let component: ChatbotUserOptionsComponent;
  let fixture: ComponentFixture<ChatbotUserOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotUserOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotUserOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
