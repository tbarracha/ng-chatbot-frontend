import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotModelSelectorComponent } from './chatbot-model-selector.component';

describe('ChatbotModelSelectorComponent', () => {
  let component: ChatbotModelSelectorComponent;
  let fixture: ComponentFixture<ChatbotModelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotModelSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotModelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
