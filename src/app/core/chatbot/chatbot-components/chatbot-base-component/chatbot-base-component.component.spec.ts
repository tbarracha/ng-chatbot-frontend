import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotBaseComponentComponent } from './chatbot-base-component.component';

describe('ChatbotBaseComponentComponent', () => {
  let component: ChatbotBaseComponentComponent;
  let fixture: ComponentFixture<ChatbotBaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotBaseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotBaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
